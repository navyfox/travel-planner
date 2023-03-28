import { IPlacesList, ITopPlace } from './types';
import * as s from './styles';
import { GOOGLE_MAP_SEARCH_LINK } from '@/shared/constants';

export const PlacesList = ({ places }: IPlacesList) => {
  if (!places || !(Array.isArray(places) && places?.length)) null;
  return (
    <s.Wrapper>
      {places?.map(({ id, name, description, link }: ITopPlace, index) => (
        <s.Place key={id}>
          <s.Title>
            <s.Link
              target="_blank"
              rel="noopener noreferrer"
              href={link ? link : `${GOOGLE_MAP_SEARCH_LINK}${name}`}
            >
              {`${index + 1}. ${name}`}
            </s.Link>
          </s.Title>
          <s.Description>{description}</s.Description>
        </s.Place>
      ))}
    </s.Wrapper>
  );
};
