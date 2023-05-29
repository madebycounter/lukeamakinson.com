import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { GREEN, PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useStaticQuery, graphql } from "gatsby";
import richTextOptions from "../global/richTextOptions";
import Media from "../components/Media";
import { Link } from "gatsby";

const StyledContent = styled.div`
    h1 {
        --size: 9.5rem;

        @media (max-width: 840px) {
            --size: 18vw;
        }

        @media (max-width: 280px) {
            --size: 17vw;
        }
    }

    .media {
        width: 60%;
        margin: auto;
    }

    max-width: 800px;
    margin: auto;
`;

const Banner = styled.div`
    width: 50%;
    margin: auto;
    margin-bottom: var(--margin);
    margin-top: var(--margin);

    @media (max-width: 840px) {
        width: 60%;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: 8rem;

    @media (max-width: 850px) {
        font-size: 15vw;
    }
`;

const AboutPage = () => {
    const { pageContent, banner } = useStaticQuery(graphql`
        {
            pageContent: contentfulPageContent(slug: { eq: "about" }) {
                name
                content {
                    raw
                    references {
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
            banner: contentfulAsset(
                contentful_id: { eq: "1N6TKY1ZK2aLE2Df5woncy" }
            ) {
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
    `);

    return (
        <ThemeProvider theme={PrimaryTheme(GREEN)}>
            <GlobalStyle />

            <Content>
                <Navbar active="about" />

                <Banner>
                    <Link to="/">
                        <Media src={banner} />
                    </Link>
                </Banner>

                <StyledContent>
                    <Title>Hi, J'm Luke.</Title>
                    {renderRichText(pageContent.content, richTextOptions)}
                </StyledContent>
            </Content>
        </ThemeProvider>
    );
};

export default AboutPage;

export const Head = () => <Header title="About" />;
