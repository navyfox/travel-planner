import { Configuration, OpenAIApi } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';
import { AxiosError } from 'axios';
import CryptoJS from 'crypto-js';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      success: false,
      data: {
        error: {
          message: 'OpenAI API key not configured, please follow instructions in README.md',
        },
      },
    });
    return;
  }

  const country = req.body.country || '';
  const email = req.body.email || '';
  if (country.trim().length === 0 || !email) {
    res.status(400).json({
      error: {
        message: 'Please enter a valid country and user',
      },
    });
    return;
  }

  const user = CryptoJS.enc.Base64.stringify(CryptoJS.MD5(email));

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(country),
      temperature: 0.6,
      user,
      max_tokens: 2048,
    });
    const responseJSON = completion.data.choices[0].text || '';
    if (responseJSON) {
      res.status(200).json({ result: JSON.parse(responseJSON) });
    }
  } catch (error) {
    // WIP Consider adjusting the error handling logic for your use case
    if (error instanceof AxiosError) {
      console.error(error?.response?.status, error?.response?.data);
      res.status(error?.response?.status || 400).json(error?.response?.data);
    } else {
      console.error(`Error with OpenAI API request: ${error}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        },
      });
    }
  }
}

function generatePrompt(country: string) {
  const capitalizedCountry = country[0].toUpperCase() + country.slice(1).toLowerCase();
  return `Create a valid JSON array of 2 objects to list famous tourist places in ${capitalizedCountry} or return null if this place doesn't exist. Example: [{
  \"id\": \"Unique identifier\", 
  \"name\": \"Place name\", 
  \"description\": \"Short description\",
  }]
  
  Do not escape the double quotes in the output and don't use newline: The JSON object is:`;
}
