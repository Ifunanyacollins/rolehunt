import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";

function withAuthenticator<T>(WrappedComponent: React.ComponentType<T>) {
  return (props: T) => {
    const [user, setUser] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          if (user) {
            setUser(user);
          }
          setIsLoaded(true);
        })
        .catch((error) => {
          setUser(null);
          setIsLoaded(true);
        });
    }, [Auth.currentSession]);

    if (user === null && isLoaded === true)
      return <Navigate to="/auth/login" />;
    return <WrappedComponent {...(props as T)} user={user} />;
  };
}

export default withAuthenticator;
