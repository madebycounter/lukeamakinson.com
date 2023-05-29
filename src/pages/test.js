import React from "react";
import { ThemeProvider } from "styled-components";
import { PrimaryTheme, RED } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const TestPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme(RED)}>
            <GlobalStyle />

            <Content>
                <Navbar active="portfolio" />

                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>Paragraph</p>
            </Content>
        </ThemeProvider>
    );
};

export default TestPage;

export const Head = () => <Header title="Test Page" />;
