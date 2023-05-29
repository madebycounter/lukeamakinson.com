exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
        type ContentfulPageContent implements Node {
            name: String!
            slug: String!
            content: ContentfulRichText
        }

        type ContentfulBlogPost implements Node {
            title: String!
            createdAt: Date! @dateformat
            tags: [String]
            slug: String!
            content: ContentfulRichText
        }

        type ContentfulPortfolioItem implements Node {
            title: String!
            date: Date! @dateformat
            aspectRatio: Float!
            pageContent: ContentfulPageContent
            pinned: Boolean!
            clickable: Boolean!
            slug: String!
        }

        type ContentfulRichText implements Node {
            raw: String!
        }
    `);
};
