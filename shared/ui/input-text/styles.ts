import styled from '@emotion/styled';
import theme from '@/shared/styles/theme';
// import media from '@/shared/styles/media';

export const Input = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: ${theme.colors.onyx};
  font-family: ${theme.fonts.default};
  padding: 12px 16px;
  border: 1px solid ${theme.colors.pictonBlue};
  border-radius: 4px;
  margin-bottom: 24px;
  outline-color: ${theme.colors.persianGreen};
`;
