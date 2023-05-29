import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { PrimaryTheme, RED } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Box from "../components/Box";
import { Link, useStaticQuery, graphql } from "gatsby";
import Slideshow from "../components/Slideshow";
import Gallery from "../components/Gallery";

const PortfolioBox = styled(Box)`
    display: grid;
    gap: 0 var(--margin);
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 0;

    h2 {
        font-size: var(--fs-md);
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;

        &.limit {
            grid-template-rows: 1fr 1fr;
        }

        h2 {
            font-size: var(--fs-lg);
        }
    }
`;

const PortfolioContent = styled(Content)`
    h1 {
        margin-bottom: 0;
    }
`;

const StyledPortfolioItem = styled.div`
    .media-wrapper {
        margin: var(--margin) 0;
    }

    .media {
        border-radius: 8px;
    }

    h2 {
        margin-top: calc(var(--margin) / 2);
        font-family: ${(props) => props.theme.bodyFont};
    }
`;

const PortfolioItem = ({ title, slug, clickable, thumbnail, aspectRatio }) => {
    const autoplay =
        thumbnail && thumbnail.length !== 0 && thumbnail[0].gatsbyImageData;

    return (
        <StyledPortfolioItem>
            <Link to={clickable && `/portfolio/${slug}`}>
                <div className="media-wrapper">
                    <Slideshow
                        src={{
                            content: thumbnail,
                            autoplayDelay: 3000,
                            autoplayOffset: Math.random() * 3000,
                            autoplay,
                        }}
                        aspectRatio={aspectRatio}
                    />
                    {title && <h2>{title}</h2>}
                </div>
            </Link>
        </StyledPortfolioItem>
    );
};

const PortfolioPage = () => {
    const [state, setState] = useState({
        width: window.innerWidth,
    });
    const { pinned, recent } = useStaticQuery(graphql`
        {
            pinned: allContentfulPortfolioItem(
                sort: { createdAt: ASC }
                filter: { pinned: { eq: true } }
            ) {
                nodes {
                    title
                    slug
                    clickable
                    aspectRatio
                    thumbnail {
                        ... on ContentfulAsset {
                            contentful_id
                            title
                            description
                            publicUrl
                            gatsbyImageData
                            mimeType
                            __typename
                        }
                    }
                }
            }
            recent: allContentfulPortfolioItem(
                sort: { createdAt: ASC }
                filter: { pinned: { eq: false } }
            ) {
                nodes {
                    title
                    slug
                    clickable
                    aspectRatio
                    thumbnail {
                        ... on ContentfulAsset {
                            contentful_id
                            title
                            description
                            publicUrl
                            gatsbyImageData
                            mimeType
                            __typename
                        }
                    }
                }
            }
        }
    `);

    const updateWidth = () => {
        setState({ width: window.innerWidth });
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    });

    return (
        <ThemeProvider theme={PrimaryTheme(RED)}>
            <GlobalStyle />

            <PortfolioContent>
                <Navbar active="portfolio" />

                <h1>Featured</h1>

                <PortfolioBox className="limit">
                    {pinned.nodes.map((node, idx) => (
                        <PortfolioItem
                            key={idx}
                            title={node.title}
                            slug={node.slug}
                            clickable={node.clickable}
                            thumbnail={node.thumbnail}
                            aspectRatio={node.aspectRatio}
                        />
                    ))}
                </PortfolioBox>

                <h1>Recent</h1>

                <Box>
                    <Gallery
                        components={recent.nodes.map((node, idx) => (
                            <PortfolioItem
                                key={idx}
                                slug={node.slug}
                                clickable={node.clickable}
                                thumbnail={node.thumbnail}
                                aspectRatio={node.aspectRatio}
                            />
                        ))}
                        columns={state.width > 650 ? 3 : 1}
                    />
                </Box>
            </PortfolioContent>
        </ThemeProvider>
    );
};

export default PortfolioPage;

export const Head = () => <Header title="Portfolio" />;
