import React from "react";
import { ThemeProvider } from "styled-components";
import { PrimaryTheme, RED } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Box from "../components/Box";
import { Title } from "../global/typography";

const PortfolioPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme(RED)}>
            <GlobalStyle />

            <Content>
                <Navbar active="portfolio" />

                <Box>
                    <Title>Hello, world!</Title>
                </Box>
            </Content>
        </ThemeProvider>
    );
};

export default PortfolioPage;

export const Head = () => <Header title="Portfolio" />;
