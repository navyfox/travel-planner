import styled from '@emotion/styled';
import theme from '@/shared/styles/theme';

export const SingOutButton = styled.button`
  background: #fff;
  border: 1px solid #6d758d;
  border-radius: 4px;
  color: #4d536e;
  outline: none;
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 48px;
  justify-content: center;
  padding: 8px 16px;
  position: relative;
  width: 160px;
  cursor: pointer;
  font-family: ${theme.fonts.default};
  margin: 10px;

  &:focus {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #005fcc;
  }
  &:hover {
    background: #f9faff;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;
