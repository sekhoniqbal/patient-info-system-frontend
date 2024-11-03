import { useEffect, useState } from "react";
import authenticationService from "../service/authentication-service";

export default function useAuthentication() {
   const [authInfo, setAuthInfo] = useState(authenticationService.getAuthInfo());

   useEffect(() => {
      authenticationService.registerListener(setAuthInfo);
      return () => authenticationService.removeListener(setAuthInfo);
   }, [setAuthInfo])

   return { authInfo }
}