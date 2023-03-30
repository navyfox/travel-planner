import styled from '@emotion/styled';
import theme from '@/shared/styles/theme';

export const GoogleButton = styled.button`
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.raven};
  border-radius: 4px;
  color: ${theme.colors.fiord};
  outline: none;
  align-items: center;
  border-radius: 6px;
  display: flex;
  height: 48px;
  justify-content: center;
  padding: 8px 16px;
  position: relative;
  width: 260px;
  cursor: pointer;
  font-family: ${theme.fonts.default};

  &:focus {
    box-shadow: 0 0 0 2px ${theme.colors.white}, 0 0 0 4px ${theme.colors.scienceBlue};
  }
  &:hover {
    background: ${theme.colors.zircon};
  }
`;

export const WrapperCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.span`
  display: flex;
  margin-right: 10px;
`;
