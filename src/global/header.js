import React from "react";

const Header = ({ title, description }) => {
    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />

            <title>
                LAM {title && "|"} {title}
            </title>

            {description && <meta name="description" content={description} />}
        </>
    );
};

export default Header;
