import React from "react";
import styled from "styled-components";

const StyledGallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: var(--margin);
    width: 100%;

    > div {
        flex: 1;
    }

    > div > div {
        margin: calc(var(--margin) / 2) 0;
    }
`;

const Gallery = ({ components, columns }) => {
    var cols = [];

    for (let i = 0; i < columns; i++) {
        cols.push([]);
    }

    if (components) {
        for (let i = 0; i < cols.length; i++) {
            for (let j = i; j < components.length; j += cols.length) {
                cols[i].push(components[j]);
            }
        }
    }

    return (
        <StyledGallery>
            {cols.map((col, idx1) => (
                <div key={`col_${idx1}`}>
                    {col.map((comp, idx2) => (
                        <div key={`itm_${idx2}`}>{comp}</div>
                    ))}
                </div>
            ))}
        </StyledGallery>
    );
};

Gallery.defaultProps = {
    columns: 3,
};

export default Gallery;
