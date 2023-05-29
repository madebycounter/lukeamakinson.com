import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BLUE, PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { Navlink, Title } from "../global/typography";
import BlogPosts, { useBlogPosts } from "../components/BlogPosts";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const BlogContent = styled(Content)``;

const StyledTitle = styled.div`
    * {
        display: inline;
    }

    > div {
        --size: 3rem;
        font-family: ${(props) => props.theme.navFont};
        color: ${(props) => props.color || props.theme.foreground};
        font-weight: 400;
        font-size: var(--size);
        text-decoration: none;
        position: relative;
    }
`;

const StyledTag = styled(Navlink)`
    --size: 3rem;
    font-family: ${(props) => props.theme.bodyFont};
    color: ${(props) => props.theme.alternate};
    font-weight: 400;
    font-size: var(--size);
    text-decoration: none;
    position: relative;
    white-space: nowrap;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: calc(0.05 * var(--size));
        bottom: calc(0.03 * var(--size) * -1);
        left: 0px;
        transition: transform 100ms ease;
        z-index: 1;

        background-color: ${(props) => props.theme.alternate};
    }

    &:not(.active):before {
        transform: scaleX(0);
    }

    &:hover::before,
    &:focus::before {
        ${(props) => props.underline && `transform: scaleX(1);`}
        ${(props) => props.underline && `border: none;`}
    }
`;

const BlogPage = () => {
    const hash = useLocation().hash.replace("#", "").replace("%20", " ");
    const { blogPosts, tags } = useBlogPosts(hash);

    return (
        <ThemeProvider theme={PrimaryTheme(BLUE)}>
            <GlobalStyle />

            <BlogContent>
                <Navbar active="blog" />

                <StyledTitle>
                    <Title>J ramble about:&nbsp;</Title>

                    <div>
                        {tags.map((tag, idx) => (
                            <>
                                <StyledTag
                                    active={tag === hash ? "active" : ""}
                                    key={tag}
                                    to={`#${tag}`}
                                >
                                    {tag}
                                </StyledTag>
                                {idx < tags.length - 1 && ", "}
                            </>
                        ))}
                    </div>
                </StyledTitle>

                <BlogPosts blogPosts={blogPosts} />
            </BlogContent>
        </ThemeProvider>
    );
};

export default BlogPage;

export const Head = () => <Header title="Blog" />;
