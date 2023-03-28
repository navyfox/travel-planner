import styled from '@emotion/styled';
import theme from '@/shared/styles/theme';
import media from '@/shared/styles/media';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  font-family: ${theme.fonts.default};

  &:placeholder {
    color: ${theme.colors.coolGrey};
    opacity: 1;
  }
`;

export const Title = styled.h1`
  font-size: 38px;
  line-height: 40px;
  font-weight: bold;
  color: ${theme.colors.pictonBlue};
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.onyx};
  font-family: ${theme.fonts.default};

  &[type='submit'] {
    padding: 12px 0;
    color: ${theme.colors.white};
    background-color: ${theme.colors.pictonBlue};
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
`;

export const Form = styled.form<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 315px;
  padding: 0px 5px;

  ${media.tablet} {
    max-width: 580px;
  }
`;

export const Result = styled.div`
  font-weight: bold;
  margin-top: 40px;
`;
