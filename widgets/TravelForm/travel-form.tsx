import Head from 'next/head';
import { SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import { AxiosError } from 'axios';
import * as s from './styles';

export const TravelForm = () => {
  const [animalInput, setAnimalInput] = useState('');
  const [result, setResult] = useState();

  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/openai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setAnimalInput('');
    } catch (error) {
      if (error instanceof Error) {
        // WIP Sentry
        console.error(error);
        alert(error.message);
      }
    }
  };
  return (
    <s.Main>
      <Image src="/plane.png" alt="plane" width={200} height={200} />
      <h3>Name my pet</h3>
      <s.Form onSubmit={(e) => onSubmit(e)}>
        <s.Input
          type="text"
          name="animal"
          placeholder="Enter an animal"
          value={animalInput}
          onChange={(e) => setAnimalInput(e.target.value)}
        />
        <s.Input type="submit" value="Generate names" />
      </s.Form>
      <s.Result>{result}</s.Result>
    </s.Main>
  );
};
