import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { PrimaryTheme, RED } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Box from "../components/Box";

const PortfolioContent = styled(Content)`
    h1 {
        margin-bottom: 0;
    }
`;

const PortfolioPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme(RED)}>
            <GlobalStyle />

            <PortfolioContent>
                <Navbar active="portfolio" />

                <h1>Featured</h1>

                <Box>
                    <p>Hello, world!</p>
                </Box>

                <h1>Recent</h1>

                <Box>
                    <p>Hello, world!</p>
                </Box>
            </PortfolioContent>
        </ThemeProvider>
    );
};

export default PortfolioPage;

export const Head = () => <Header title="Portfolio" />;
