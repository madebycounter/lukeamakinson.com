import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { PrimaryTheme, RED } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Box from "../components/Box";
import { Paragraph, Title } from "../global/typography";

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

                <Title>Featured</Title>

                <Box>
                    <Paragraph>Hello, world!</Paragraph>
                </Box>

                <Title>Recent</Title>

                <Box>
                    <Paragraph>Hello, world!</Paragraph>
                </Box>
            </PortfolioContent>
        </ThemeProvider>
    );
};

export default PortfolioPage;

export const Head = () => <Header title="Portfolio" />;
