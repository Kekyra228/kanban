import { useContext } from "react";
import { ThemeContext } from "styled-components";


export function useThemeContext() {

  return useContext(ThemeContext);

}