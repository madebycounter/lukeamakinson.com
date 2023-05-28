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
    color: ${(props) => props.color || props.theme.foreground};
    font-weight: 400;
    font-size: var(--size);
    text-decoration: none;
    position: relative;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: calc(0.08 * var(--size));
        bottom: calc(0.1 * var(--size) * 1);
        left: 0px;
        transition: transform 100ms ease;
        z-index: 1;

        background-color: ${(props) => props.color || props.theme.foreground};
    }

    &:not(.active):before {
        transform: scaleX(0);
    }

    &:hover::before,
    &:focus::before {
        ${(props) => props.underline && `transform: scaleX(1);`}
        ${(props) => props.underline && `border: none;`}
    }
`;

Navlink.defaultProps = {
    underline: true,
    color: null,
};
