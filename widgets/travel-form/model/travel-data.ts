import { useState } from 'react';
import { ITopPlace } from '@/shared/ui/places-list';
import { generate } from '../lib/api';

export const useTravelData = () => {
  const [hasLoading, setHasLoading] = useState(false);
  const [countryInput, setCountryInput] = useState('');
  const [result, setResult] = useState<ITopPlace[] | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setHasLoading(true);
      const response = await generate(countryInput);

      const { data } = await response;
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
      // setResult([
      //   {
      //     id: '1',
      //     name: 'Uluwatu Temple',
      //     description: 'A Hindu temple located on the Bukit Peninsula of Bali',
      //   },
      //   {
      //     id: '2',
      //     name: 'Tanah Lot Temple',
      //     description: 'A Hindu temple located on the coast of Bali',
      //   },
      // ]);
      setCountryInput('');
    } catch (error) {
      if (error instanceof Error) {
        // WIP Sentry
        console.error(error);
        // alert(error.message);
      }
    } finally {
      setHasLoading(false);
    }
  };
  return {
    result,
    hasLoading,
    countryInput,
    setCountryInput,
    onSubmit,
  };
};
