import axios from 'axios';

export const generate = async (country: string) =>
  axios.post(
    '/api/openai/generate',
    {
      country,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
