import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { useStaticQuery, graphql } from "gatsby";
import richTextOptions from "../global/richTextOptions";
import Box from "./Box";
import styled from "styled-components";

export const useBlogPosts = (filter) => {
    const { blogPosts } = useStaticQuery(graphql`
        {
            blogPosts: allContentfulBlogPost(sort: { createdAt: DESC }) {
                nodes {
                    title
                    createdAt(formatString: "D/M/YY @ h:m A")
                    tags
                    slug
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
            }
        }
    `);

    var tags = [];

    blogPosts.nodes.forEach((post) => {
        post.tags.forEach((tag) => {
            if (!tags.includes(tag)) tags.push(tag);
        });
    });

    if (!filter)
        return {
            blogPosts: blogPosts.nodes,
            tags,
        };

    return {
        blogPosts: blogPosts.nodes.filter((post) => post.tags.includes(filter)),
        tags,
    };
};

const BlogTitle = styled.h1`
    --size: min(3rem, 9vw);
    font-family: ${(props) => props.theme.bodyFont};
    text-align: center;
    font-weight: 400;
    font-size: var(--size);
    line-height: calc(0.87 * var(--size));
    margin-bottom: 0;
`;

const BlogSubtitle = styled.h2`
    --size: min(2rem, 6vw);
    font-family: ${(props) => props.theme.bodyFont};
    text-align: center;
    font-weight: 400;
    font-size: var(--size);
    line-height: calc(0.87 * var(--size));
    margin-top: 0;
`;

const BlogPost = ({ title, timestamp, content }) => {
    return (
        <Box>
            <BlogTitle>{title}</BlogTitle>
            <BlogSubtitle>{timestamp}</BlogSubtitle>

            <div>{renderRichText(content, richTextOptions)}</div>
        </Box>
    );
};

const BlogPosts = ({ blogPosts }) => {
    return (
        <div>
            {blogPosts.map((post) => (
                <BlogPost
                    key={post.slug}
                    title={post.title}
                    timestamp={post.createdAt}
                    content={post.content}
                />
            ))}
        </div>
    );
};

export default BlogPosts;
