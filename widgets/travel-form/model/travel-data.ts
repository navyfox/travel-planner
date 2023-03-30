import { useState } from 'react';
import { ITopPlace } from '@/shared/ui/places-list';
import { generate } from '../lib/api';
import { useSession } from 'next-auth/react';

export const useTravelData = () => {
  const [hasLoading, setHasLoading] = useState(false);
  const [countryInput, setCountryInput] = useState('');
  const [result, setResult] = useState<ITopPlace[] | null>(null);
  const { data: session } = useSession();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setHasLoading(true);
      const response = await generate({ country: countryInput, email: session?.user?.email });

      const { data } = await response;
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data.result);
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
