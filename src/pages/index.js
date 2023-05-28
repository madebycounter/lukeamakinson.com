import React from "react";
import { ThemeProvider } from "styled-components";
import { PrimaryTheme } from "../global/themes";
import { Title } from "../global/typography";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";

const IndexPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme}>
            <GlobalStyle />
            <Title>Hello, world!</Title>
        </ThemeProvider>
    );
};

export default IndexPage;

export const Head = () => <Header />;
