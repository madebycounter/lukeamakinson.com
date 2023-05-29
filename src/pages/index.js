import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { PrimaryTheme } from "../global/themes";
import { GlobalStyle } from "../global/styles";
import Header from "../global/header";
import { Navlink } from "../components/Navbar";

export const Title = styled.h1`
    --size: 18vw;
    font-family: ${(props) => props.theme.titleFont};
    color: ${(props) => props.theme.foreground};
    font-weight: 400;
    font-size: var(--size);
    line-height: calc(0.87 * var(--size));
    letter-spacing: calc(0.00625 * var(--size) * -1);
`;

const Jumbotron = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-areas: "blank" "title";

    > .title {
        margin: 2rem;
        grid-area: title;
    }

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        > .title > h1 {
            --size: 18vw;
        }
    }
`;

const Navigator = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3vw;

    a {
        --size: 8.7vw;
        line-height: 7vw;

        &.red {
            color: ${(props) => props.theme.colors.red};
        }

        &.green {
            color: ${(props) => props.theme.colors.green};
        }

        &.blue {
            color: ${(props) => props.theme.colors.blue};
        }
    }

    @media (max-width: 1000px) {
        flex-direction: column;
        text-align: center;
        margin-top: 2vw;

        a {
            --size: 12vw;
            line-height: 11vw;
        }
    }
`;

const IndexPage = () => {
    return (
        <ThemeProvider theme={PrimaryTheme()}>
            <GlobalStyle />

            <Jumbotron>
                <div className="title">
                    <Title>
                        LUKE A.
                        <br />
                        MAKINSON
                    </Title>

                    <Navigator>
                        <div>
                            <Navlink
                                color={PrimaryTheme().colors.red}
                                className="red"
                                to="/portfolio"
                            >
                                PORTFOLIO
                            </Navlink>
                        </div>

                        <div>
                            <Navlink
                                color={PrimaryTheme().colors.green}
                                className="green"
                                to="/about"
                            >
                                ABOUT
                            </Navlink>
                        </div>

                        <div>
                            <Navlink
                                color={PrimaryTheme().colors.blue}
                                className="blue"
                                to="/blog"
                            >
                                BLOG
                            </Navlink>
                        </div>
                    </Navigator>
                </div>
            </Jumbotron>
        </ThemeProvider>
    );
};

export default IndexPage;

export const Head = () => <Header />;
