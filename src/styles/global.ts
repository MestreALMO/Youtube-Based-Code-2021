import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --clr-primary: #202020;
        --clr-secundary: #fff;
        --clr-red: #FF0000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-family: 'Roboto', 'Arial', sans-serif;
    }

    body {
        background: var(--clr-primary);
        color: var(--clr-secundary);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
