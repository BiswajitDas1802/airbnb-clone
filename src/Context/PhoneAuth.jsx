import { createContext, useContext } from "react";
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();
export function userAuthContextProvider({ children }) {
  const setUpRecaptch = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
  };

  <userAuthContext.Provider value={{ setUpRecaptch }}>
    {children}
  </userAuthContext.Provider>;
}
