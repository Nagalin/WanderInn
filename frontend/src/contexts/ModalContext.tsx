import { createContext, ReactNode, useContext, useState } from "react";
import LoginForm from "../features/login/components/Loginform";
import Signupform from "../features/signup/components/Signupform";

type ModalContextType = {
  showSignIn: boolean;
  setShowSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  showSignUp: boolean;
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseSignIn: () => void;
  handleCloseSignUp: () => void;
  handleShowSignIn: () => void;
  handleShowSignUp: () => void;
};

type ModalProviderProps = {
  children: ReactNode;
};
const ModalContext = createContext({} as ModalContextType);
export function useModalContext() {
  return useContext(ModalContext);
}
export function ModalContextProvider({ children }: ModalProviderProps) {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleCloseSignIn = () => setShowSignIn(false);
  const handleCloseSignUp = () => setShowSignUp(false);

  const handleShowSignIn = () => setShowSignIn(true);
  const handleShowSignUp = () => setShowSignUp(true);
  return (
    <ModalContext.Provider
      value={{
        showSignIn,
        setShowSignIn,
        showSignUp,
        setShowSignUp,
        handleCloseSignIn,
        handleCloseSignUp,
        handleShowSignIn,
        handleShowSignUp,
      }}
    >
      <LoginForm showSignIn={showSignIn} />
      <Signupform showSignUp={showSignUp}/>
      {children}
    </ModalContext.Provider>
  );
}
