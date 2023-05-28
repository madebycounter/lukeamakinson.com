exports.createSchemaCustomization = ({ actions }) => {
    actions.createTypes(`
        type ContentfulPageContent implements Node {
            name: String!
            slug: String!
            content: ContentfulRichText
        }

        type ContentfulMedia implements Node {
            title: String!
            content: [ContentfulAsset]
            isVideo: Boolean!
            autoplay: Boolean!
            autoplayDelay: Int!
            autoplayOffset: Int!
            maxWidth: Int
            slug: String!
        }

        type ContentfulRichText implements Node {
            raw: String!
        }
    `);
};
