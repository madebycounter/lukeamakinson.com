import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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

const StyledNavbar = styled.div`
    --nav-size: min(3rem, 8.8vw);

    display: flex;
    gap: calc(0.47 * var(--nav-size));
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;

    a {
        --size: var(--nav-size);
    }
`;

const Navbar = ({ active }) => {
    const classNames = (name) => {
        return active.toLowerCase() === name.toLowerCase() ? "active" : "";
    };

    return (
        <StyledNavbar>
            <Navlink to="/portfolio" className={classNames("portfolio")}>
                PORTFOLIO
            </Navlink>
            <Navlink to="/about" className={classNames("about")}>
                ABOUT
            </Navlink>
            <Navlink to="/blog" className={classNames("blog")}>
                BLOG
            </Navlink>
        </StyledNavbar>
    );
};

export default Navbar;
