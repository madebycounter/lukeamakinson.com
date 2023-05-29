import React from "react";
import styled from "styled-components";

const Content = styled.div`
    --gap: 1rem;

    margin: auto;
    max-width: 800px;
    padding: var(--gap);
    width: calc(100% - (2 * var(--gap)));
`;

export default Content;
