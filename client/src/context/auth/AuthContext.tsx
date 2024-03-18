import {
  createContext,
  useState
} from "react";

import { newRequest } from "@/lib/newRequest";
import toast from "react-hot-toast";

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
  user: User | undefined | string;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  totalPrice: number | undefined;
  setTotalPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
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

  //* USER 
  const [user, setUser] = useState<string | undefined>(() =>
    localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser') || '')
      : undefined
  );

  //* LOADING.... 
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //* PRICE 
  const [totalPrice, setTotalPrice] = useState<number | undefined>(() =>
    localStorage.getItem('price')
      ? JSON.parse(localStorage.getItem('price') || '')
      : undefined
  );

  //* LOGOUT 
  const callLogOut = async () => {
    setIsLoading(true);

    try {
      const res = await newRequest.post('/auth/logout');

      console.log(res.data);
      toast.success('Logout success!');

      localStorage.removeItem('currentUser');
      setIsLoading(false);
      setUser(undefined);
      // window.location.reload();
    } catch (error) {
      toast.error('Something went wrong!');
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        totalPrice,
        setTotalPrice,
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