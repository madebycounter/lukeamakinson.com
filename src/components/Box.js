import React from "react";
import styled from "styled-components";

const Box = styled.div`
    --size: 12px;

    @media (max-width: 840px) {
        --size: 10px;
    }

    border: 1px solid transparent;
    box-shadow: 0 0 0 var(--size) ${(props) => props.theme.alternate};
    border-radius: var(--size);
    padding: 0 var(--margin);
    margin: calc(var(--margin) + (var(--size) * 2)) 0;
`;

export default Box;
