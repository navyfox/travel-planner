import Image from 'next/image';
import * as s from './styles';
import LoopedLoader from '@/shared/ui/looped-loader';
import PlacesList from '@/shared/ui/places-list';
import { useTravelData } from '../model/travel-data';
import InputText from '@/shared/ui/input-text';

export const TravelForm = () => {
  const { result, countryInput, setCountryInput, hasLoading, onSubmit } = useTravelData();

  return (
    <s.Main>
      <Image src="/plane.png" alt="plane" width={200} height={200} />
      <s.Title>Travel Planner</s.Title>
      <s.Form onSubmit={onSubmit}>
        <InputText
          type="text"
          name="country"
          placeholder="Enter a country"
          value={countryInput}
          onChange={(e) => setCountryInput(e.target.value)}
        />
        <s.Input type="submit" value="Generate places" />
      </s.Form>
      <LoopedLoader hasLoading={hasLoading} />
      {!hasLoading && result && <PlacesList places={result} />}
    </s.Main>
  );
};
