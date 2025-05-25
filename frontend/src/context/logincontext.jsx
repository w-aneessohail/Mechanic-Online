import { createContext, useEffect, useState } from "react";

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [UserEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <UserAuthContext.Provider
        value={{ UserEmail, setUserEmail, isLoggedIn, setIsLoggedIn }}
      >
        {children}
      </UserAuthContext.Provider>
    </>
  );
};

export { UserAuthContext, UserAuthContextProvider };
