import { createGlobalStyle } from "styled-components";

import EckmannWoff from "../fonts/Eckmann.woff";
import EckmannWoff2 from "../fonts/Eckmann.woff2";
import EckmannTTF from "../fonts/Eckmann.ttf";
import BusoramaWoff from "../fonts/BusoramaITCbyBT-Bold.woff";
import BusoramaWoff2 from "../fonts/BusoramaITCbyBT-Bold.woff2";
import BusoramaTTF from "../fonts/BusoramaITCbyBT-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Eckmann";
        src: url(${EckmannWoff2}) format('woff2'), url(${EckmannWoff}) format('woff'), url(${EckmannTTF}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "ITC Busorama";
        src: url(${BusoramaWoff2}) format('woff2'), url(${BusoramaWoff}) format('woff'), url(${BusoramaTTF}) format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    * {
        color: ${(props) => props.theme.foreground};
        background-color: ${(props) => props.theme.background};
        margin: 0;
        padding: 0;
    }

    :root {
        --margin: 1rem;

        --fs-sm: 1.2rem;
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
