import React from "react";
import { ThemeProvider } from "styled-components";
import { GREEN, PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import { Content } from "../components/Content";

const AboutPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme(GREEN)}>
            <GlobalStyle />

            <Content>
                <Navbar active="about" />
            </Content>
        </ThemeProvider>
    );
};

export default AboutPage;

export const Head = () => <Header title="About" />;
