import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const isTokenDateValid = () => {
    if (localStorage.getItem("tokenissue")) {
      const exp = new Date(atob(localStorage.getItem("tokenissue")));
      const now = new Date();
      if (now.getTime() > exp.getTime()) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };

  const isTokenValid = () => {
    if (!localStorage.getItem("token") || !isTokenDateValid()) {
      return false;
    }
    return true;
  };
  const signin = (newUser, callback) => {
    //   return fakeAuthProvider.signin(() => {
    //     setUser(newUser);
    //     callback();
    //   });
    setUser(newUser);
    callback();
  };

  let signout = (callback) => {
    //   return fakeAuthProvider.signout(() => {
    //     setUser(null);
    //     callback();
    //   });
    setUser(null);
    callback();
  };

  let value = { user, signin, signout, isTokenValid };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }) {
  let auth = useAuth();
  // const statusbar = useStatusbar();
  // const setStatusbar = statusbar.func();

  if (!auth.isTokenValid()) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // setStatusbar(new Statusbar_model(true, 'Please login first!', `${icon_success}#icon-cancel-circle`, 'error'));

    return <Navigate to="/login" />;
  }

  return children;
}
