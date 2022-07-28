import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/styled";
import { ContentProvider } from "./Providers/Content";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContentProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ContentProvider>
  </React.StrictMode>
);

reportWebVitals();
