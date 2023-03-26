import Head from 'next/head';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import Image from 'next/image';
import { AxiosError } from 'axios';
import * as s from './styles';
import InputDays from '@/shared/ui/input-days';

interface ITopPlaces {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export const TravelForm = () => {
  const [hasLoading, setHasLoading] = useState(false);
  const [countryInput, setCountryInput] = useState('');
  const [result, setResult] = useState<[ITopPlaces] | null>(null);
  // const [days, setDays] = useState(1);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setHasLoading(true);
      const response = await fetch('/api/openai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ country: countryInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log(data.result);
      setResult(data.result);
      setCountryInput('');
    } catch (error) {
      if (error instanceof Error) {
        // WIP Sentry
        console.error(error);
        alert(error.message);
      }
    } finally {
      setHasLoading(false);
    }
  };
  return (
    <s.Main>
      <Image src="/plane.png" alt="plane" width={200} height={200} />
      <h3>Travel Planner</h3>
      <s.Form onSubmit={onSubmit}>
        <s.Input
          type="text"
          name="country"
          placeholder="Enter an country"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
        />
        {/* <InputDays name="days" label="Days" onChangeDay={setDays}></InputDays> */}
        <s.Input type="submit" value="Generate places" />
      </s.Form>
      {hasLoading && (
        <div>
          <Image src="/loading.gif" alt="loading" width={320} height={240} />
        </div>
      )}
      {/* <s.Result>{result}</s.Result> */}
      {!hasLoading && (
        <ol>
          {result &&
            result.map((place) => (
              <li key={place.id}>
                <h3>
                  <s.Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${place.name}`}
                  >
                    {place.name}
                  </s.Link>
                </h3>
                <div>{place.description}</div>
              </li>
            ))}
        </ol>
      )}
    </s.Main>
  );
};
