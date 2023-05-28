import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.foreground};
    font-weight: 400;
    font-size: 3rem;
`;

export const Title = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};
