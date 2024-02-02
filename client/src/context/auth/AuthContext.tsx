import { createContext, useState } from "react";

// type AccessTokensType = {
//   access: string | undefined;
//   refresh: string | undefined;
// };

export type User = {
  username: string;
  email: string;
  userImg: string;
  isSeller: boolean;
};

interface CurrentUserContextType {
  // authTokens: AccessTokensType;
  // setAuthTokens: React.Dispatch<React.SetStateAction<AccessTokensType>>;
  user: User | undefined | string | any;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  callLogOut: () => void;
}

export const AuthContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const [authTokens, setAuthTokens] = useState<AccessTokensType>(() =>
  //   localStorage.getItem('authTokens')
  //     ? JSON.parse(localStorage.getItem('authTokens') || '')
  //     : undefined
  // );

  const [user, setUser] = useState<string | undefined>(() =>
    localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '')
      : undefined
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const callLogOut = () => {
    setUser(undefined);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        callLogOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;