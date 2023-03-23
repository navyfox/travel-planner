import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  font-family: 'ColfaxAI', Helvetica, sans-serif;

  &:placeholder {
    color: #8e8ea0;
    opacity: 1;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #353740;
  font-family: 'ColfaxAI', Helvetica, sans-serif;

  &[type='submit'] {
    padding: 12px 0;
    color: #fff;
    background-color: #10a37f;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }

  &[type='text'] {
    padding: 12px 16px;
    border: 1px solid #10a37f;
    border-radius: 4px;
    margin-bottom: 24px;
    outline-color: #10a37f;
  }
`;

export const H3 = styled.h3`
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  color: #202123;
  margin: 16px 0 40px;
`;

export const Form = styled.form<{ onSubmit: (event: unknown) => Promise<void> }>`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Result = styled.div`
  font-weight: bold;
  margin-top: 40px;
`;
