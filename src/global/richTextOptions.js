import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import Media from "../components/Media";

const richTextOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            console.log(node);
            return <Media src={node.data.target} />;
        },
    },
};

export default richTextOptions;
