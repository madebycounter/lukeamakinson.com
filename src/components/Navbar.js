import React from "react";
import styled from "styled-components";
import { Navlink } from "../global/typography";

const StyledNavbar = styled.div`
    display: flex;
    gap: 1.4rem;
    justify-content: center;
    width: 100%;
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
