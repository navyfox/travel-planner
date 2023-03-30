import * as s from './styles';
import { signOut } from 'next-auth/react';

export const HeaderApp = () => {
  return (
    <s.Header>
      <s.SingOutButton onClick={() => signOut()}>
        <span>sign out</span>
      </s.SingOutButton>
    </s.Header>
  );
};

export default HeaderApp;
