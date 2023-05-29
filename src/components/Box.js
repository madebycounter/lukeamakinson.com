import React from "react";
import styled from "styled-components";

const Box = styled.div`
    --size: 8px;

    @media (max-width: 840px) {
        --size: 6px;
    }

    border: var(--size) solid ${(props) => props.theme.alternate};
    border-radius: var(--size);
    padding: var(--gap);
    margin: 0;
`;

export default Box;