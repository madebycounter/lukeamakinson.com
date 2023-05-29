import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BLUE, PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import BlogPosts, { useBlogPosts } from "../components/BlogPosts";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const BlogContent = styled(Content)``;

const StyledTags = styled.div`
    * {
        display: inline;
        font-size: var(--fs-xl);
    }

    h1 {
        margin-bottom: 0;
    }

    .active {
        text-decoration: underline;
    }

    @media (max-width: 600px) {
        h1 {
            display: block;
        }
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

                <StyledTags>
                    <h1>J ramble about:&nbsp;</h1>

                    <div>
                        {tags.map((tag, idx) => (
                            <>
                                {idx === tags.length - 1 && "and "}
                                <Link
                                    className={tag === hash ? "active" : ""}
                                    key={tag}
                                    to={`#${tag}`}
                                >
                                    {tag}
                                </Link>
                                {idx < tags.length - 1 && ", "}
                            </>
                        ))}
                    </div>
                </StyledTags>

                <BlogPosts blogPosts={blogPosts} />
            </BlogContent>
        </ThemeProvider>
    );
};

export default BlogPage;

export const Head = () => <Header title="Blog" />;
