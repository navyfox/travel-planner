import styled from '@emotion/styled';
import theme from '@/shared/styles/theme';
import media from '@/shared/styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  margin: auto;
  padding: 0 10px;
  width: 100%;

  ${media.tablet} {
    max-width: 580px;
  }
`;

export const Place = styled.div`
  flex-direction: column;
  margin-top: 20px;
`;

export const Title = styled.h3`
  font-size: ${theme.heading.h3};
  font-size: 26px;
  line-height: 40px;
  font-weight: bold;
  margin: 8px 0;
`;

export const Link = styled.a`
  color: ${theme.colors.pictonBlue};
  text-decoration: none;
`;

export const Description = styled.a`
  font-size: 20px;
`;
