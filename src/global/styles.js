import { createGlobalStyle } from "styled-components";

import EckmannWoff from "../fonts/ECKMANN.woff";
import EckmannWoff2 from "../fonts/ECKMANN.woff2";
import ITCBusoramaBoldWoff from "../fonts/ITC Busorama Bold.woff";
import ITCBusoramaBoldWoff2 from "../fonts/ITC Busorama Bold.woff2";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "ECKMANN";
        src: url(${EckmannWoff2}) format("woff2"), url(${EckmannWoff}) format("woff");
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
`;
