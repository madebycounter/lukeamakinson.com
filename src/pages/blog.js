import React from "react";
import { ThemeProvider } from "styled-components";
import { BLUE, PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

const BlogPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme(BLUE)}>
            <GlobalStyle />

            <Content>
                <Navbar active="blog" />
            </Content>
        </ThemeProvider>
    );
};

export default BlogPage;

export const Head = () => <Header title="Blog" />;
