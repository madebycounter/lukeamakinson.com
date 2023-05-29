import { createGlobalStyle } from "styled-components";

import EckmannWoff from "../fonts/ECKMANN.woff";
import ITCBusoramaBoldWoff from "../fonts/ITC Busorama Bold.woff";
import ITCBusoramaBoldWoff2 from "../fonts/ITC Busorama Bold.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "ECKMANN";
        src: url(${EckmannWoff}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "ITC Busorama Bold";
        src: url(${ITCBusoramaBoldWoff2}) format("woff2"), url(${ITCBusoramaBoldWoff}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    * {
        color: ${(props) => props.theme.foreground};
        background-color: ${(props) => props.theme.background};
        margin: 0;
        padding: 0;
    }

    :root {
        --margin: 1rem;

        --fs-sm: 1rem;
        --fs-md: 1.4rem;
        --fs-lg: 1.7rem;
        --fs-xl: 2.2rem;

        @media (min-width: 550px) {
            --fs-sm: 1.2rem;
            --fs-md: 1.7rem;
            --fs-lg: 2.4rem;
            --fs-xl: 3.8rem;
        }
        
        @media (min-width: 670px) {
            --fs-sm: 1.5rem;
        }
    }

    h1, h2, h3 {
        font-family: ${(props) => props.theme.titleFont};
        margin: var(--margin) 0;
    }

    h1 {
        font-size: var(--fs-xl);
    }

    h2 {
        font-size: var(--fs-lg);
    }

    h3 {
        font-size: var(--fs-md);
    }

    p {
        font-size: var(--fs-sm);
        font-family: ${(props) => props.theme.bodyFont};
        margin: var(--margin) 0;
    }

    a {
        color: ${(props) => props.theme.alternate};
        text-decoration: none;
        font-family: ${(props) => props.theme.bodyFont};
        font-size: var(--fs-sm);
    }
`;
