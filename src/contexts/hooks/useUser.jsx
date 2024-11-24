import { useContext } from "react";
import { UserContext } from "../contextUser";


export function useUserContext() {

  return useContext(UserContext);

}