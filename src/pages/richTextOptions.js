import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import Media from "../components/Media";
import { Paragraph, Title } from "../global/typography";

const richTextOptions = {
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => {
            return <Title>{children}</Title>;
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
            return <Paragraph>{children}</Paragraph>;
        },
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            console.log(node);
            return <Media src={node.data.target} />;
        },
    },
};

export default richTextOptions;
