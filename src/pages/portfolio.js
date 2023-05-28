import React from "react";
import { ThemeProvider } from "styled-components";
import { PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import { Content } from "../components/Content";

const PortfolioPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme}>
            <GlobalStyle />

            <Content>
                <Navbar active="portfolio" />
            </Content>
        </ThemeProvider>
    );
};

export default PortfolioPage;

export const Head = () => <Header title="Portfolio" />;
