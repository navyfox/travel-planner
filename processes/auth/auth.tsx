import { useSession } from 'next-auth/react';
import { AuthType } from './types';
import LoopedLoader from '@/shared/ui/looped-loader';
import * as s from './styles';

const Auth = ({ children, auth }: { children: JSX.Element; auth: AuthType }) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return auth?.loading ? (
      auth.loading
    ) : (
      <s.Center>
        <LoopedLoader hasLoading={true} />
      </s.Center>
    );
  }

  return children;
};

export default Auth;
