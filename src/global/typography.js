import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const Title = styled.h1`
    --size: 4rem;
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.foreground};
    font-weight: 400;
    font-size: var(--size);
    line-height: calc(0.87 * var(--size));
    letter-spacing: calc(0.00625 * var(--size) * -1);
`;

export const Navlink = styled(Link)`
    --size: 3rem;
    font-family: ${(props) => props.theme.navFont};
    color: ${(props) => props.theme.foreground};
    font-weight: 400;
    font-size: var(--size);
    text-decoration: none;
`;
