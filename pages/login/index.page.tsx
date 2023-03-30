import Image from 'next/image';
import { getSession, signIn } from 'next-auth/react';
import googleIcon from '@/public/icons/google.svg';
import { NextPageContext } from 'next';
import * as s from './styles';

export const LoginPage = () => {
  return (
    <s.WrapperCenter>
      <s.GoogleButton onClick={() => signIn('google', { callbackUrl: '/' })}>
        <s.IconWrapper>
          <Image src={googleIcon} alt="google" width={18} height={18} />
        </s.IconWrapper>
        <span>sign in with gooogle</span>
      </s.GoogleButton>
    </s.WrapperCenter>
  );
};

export const getServerSideProps = async (context: NextPageContext) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LoginPage;
