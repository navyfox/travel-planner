import axios from 'axios';

interface IGenerateQueryParameter {
  country: string | undefined | null;
  email: string | undefined | null;
}

export const generate = async ({ country, email }: IGenerateQueryParameter) =>
  axios.post(
    '/api/openai/generate',
    {
      country,
      email,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
