import { Global, css } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        background-color: #f9f9f9;
      }
    `}
  />
);
