import { extendTheme } from "@chakra-ui/react";
const breakPoints = {
  sm: "30em",
  md: "48em",
  lg: "65em",
  xl: "80em",
  "2xl": "96em",
};
const config = {
  initialColorMode: "light",
  useSystemColor: false,
};
export const theme = extendTheme({ config, breakPoints });
