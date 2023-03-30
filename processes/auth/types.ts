export interface IAuth {
  role?: string;
  loading?: JSX.Element;
  redirect?: string;
}

export type AuthType = IAuth | null | undefined;
