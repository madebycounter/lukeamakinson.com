import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Media from "./Media";

function mod(n, m) {
    return ((n % m) + m) % m;
}

const StyledSlideshow = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: ${({ aspectRatio }) => aspectRatio};

    > div {
        position: absolute;
        width: 100%;
        z-index: 0;

        background: ${({ theme }) => theme.backgroundColor};

        &.active {
            z-index: 1;
            opacity: 1;
        }
    }
`;

const Slideshow = ({ src, aspectRatio, playing }) => {
    const firstRender = useRef(true);
    const [state, setState] = useState({
        index: 0,
    });

    const navigate = (delta) => {
        if (src.content.length <= 1) return;

        setState({
            index: mod(state.index + delta, src.content.length),
        });
    };

    useEffect(() => {
        if (!src.autoplay) return;
        if (!playing) return;

        var timeout;

        if (firstRender.current) {
            firstRender.current = false;
            timeout = setTimeout(() => navigate(1), src.autoplayOffset);
        } else {
            timeout = setTimeout(() => navigate(1), src.autoplayDelay);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [state.index]);

    return (
        <StyledSlideshow aspectRatio={aspectRatio}>
            {src.content.map((slide, idx) => {
                const visible = state.index === idx;
                var className = visible ? "active" : "";

                return (
                    <div className={className} key={idx}>
                        <Media
                            key={idx}
                            src={slide}
                            aspectRatio={aspectRatio}
                            videoPlaying={visible && playing}
                            videoLoop={src.content.length <= 1}
                            onVideoEnd={() => navigate(1)}
                        />
                    </div>
                );
            })}
        </StyledSlideshow>
    );
};

Slideshow.defaultProps = {
    autoPlayDelay: null,
    autoPlayTimeout: 0,
    aspectRatio: 16 / 9,
    playing: true,
};

export default Slideshow;
