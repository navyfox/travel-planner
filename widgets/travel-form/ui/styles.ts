import styled from '@emotion/styled';
import theme from '@/shared/styles/theme';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  font-family: ${theme.fonts.default};

  &:placeholder {
    color: #8e8ea0;
    opacity: 1;
  }
`;

export const Link = styled.a`
  color: #34bde3;
  text-decoration: none;
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #353740;
  font-family: ${theme.fonts.default};

  &[type='submit'] {
    padding: 12px 0;
    color: #fff;
    background-color: ${theme.colors.skyBlue};
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  &[type='text'] {
    padding: 12px 16px;
    border: 1px solid ${theme.colors.skyBlue};
    border-radius: 4px;
    margin-bottom: 24px;
    outline-color: #10a38f;
  }
`;

export const H3 = styled.h3`
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  color: #202123;
  margin: 16px 0 40px;
`;

export const Form = styled.form<{
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}>`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Result = styled.div`
  font-weight: bold;
  margin-top: 40px;
`;
