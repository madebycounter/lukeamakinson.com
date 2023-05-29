import React from "react";
import styled from "styled-components";
import { Navlink } from "../global/typography";

const StyledNavbar = styled.div`
    --nav-size: min(3rem, 8vw);

    display: flex;
    gap: calc(0.47 * var(--nav-size));
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;

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
