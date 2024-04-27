import { useAuth } from "@contexts/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export default ({ children }) => {
   const { isAuthenticating, currentUser } = useAuth();
   const location = useLocation();

   if (!currentUser && isAuthenticating) return;

   return currentUser ? (
      children
   ) : (
      <Navigate to="/login" replace state={location?.pathname} />
   );
};
