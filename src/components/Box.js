import React from "react";
import styled from "styled-components";

const Box = styled.div`
    border: 8px solid ${(props) => props.theme.alternate};
    border-radius: 12px;
    padding: 1rem;
    margin: 0;
`;

export default Box;
