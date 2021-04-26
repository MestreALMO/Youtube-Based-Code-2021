import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --clr-primary-100: #AAAAAA;
        --clr-primary-200: #4D4D4D;
        --clr-primary-300: #373737;
        --clr-primary-400: #202020;
        --clr-primary-500: #121212;
        --clr-secundary-400: #fff;
        --clr-red-400: #FF0000;
        --clr-blue-400: #3EA6FF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
		font-family: 'Roboto', 'Arial', sans-serif;
    }

    body {
        background: var(--clr-primary-400);
        color: var(--clr-secundary-400);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
