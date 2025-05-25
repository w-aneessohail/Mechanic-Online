import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserAuthContext } from "../context/logincontext";

const PrivateRoute = (props) => {
  const { isLoggedIn } = useContext(UserAuthContext);

  return (
    <>
      {isLoggedIn ? (
        <>{props.children}</>
      ) : (
        <>
          <Navigate to={"/login"} />
        </>
      )}
    </>
  );
};

export default PrivateRoute;
