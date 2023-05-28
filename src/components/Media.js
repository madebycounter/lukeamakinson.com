import React, { useEffect, useRef } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

function isVideo(mimeType) {
    return ["video/mp4", "video/webm"].includes(mimeType);
}

function isImage(mimeType) {
    return ["image/jpeg", "image/png"].includes(mimeType);
}

function isGif(mimeType) {
    return mimeType === "image/gif";
}

const StyledMedia = styled.div`
    aspect-ratio: ${({ aspectRatio }) => aspectRatio};
    overflow: hidden;

    > div {
        width: 100%;
        height: 100%;

        > img,
        > video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% ${({ center }) => center}%;
        }
    }

    .gatsby-image-wrapper {
        [data-main-image] {
            object-position: 50% ${({ center }) => center}%;
        }
    }
`;

const Media = ({
    src,
    aspectRatio,
    center,
    videoPlaying,
    keepVideoPosition,
    onVideoEnd,
    videoLoop,
}) => {
    const videoRef = useRef(null);
    const { mimeType, publicUrl, description, gatsbyImageData } = src;

    useEffect(() => {
        if (!isVideo(mimeType) || !videoRef.current) return;

        if (videoPlaying) {
            if (!keepVideoPosition) videoRef.current.currentTime = 0;
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [videoPlaying]);

    return (
        <StyledMedia
            className="media"
            aspectRatio={aspectRatio}
            center={center}
        >
            {isImage(mimeType) && (
                <GatsbyImage image={gatsbyImageData} alt={description} />
            )}

            {isGif(mimeType) && (
                <div className="gif-wrapper">
                    <img src={publicUrl} alt={description} />
                </div>
            )}

            {isVideo(mimeType) && (
                <div className="video-wrapper">
                    <video
                        ref={videoRef}
                        disableRemotePlayback
                        playsInline
                        muted
                        loop={videoLoop}
                        autoPlay={videoPlaying}
                        onEnded={onVideoEnd}
                    >
                        <source src={publicUrl} type={mimeType} />
                    </video>
                </div>
            )}
        </StyledMedia>
    );
};

Media.defaultProps = {
    center: 50,
    aspectRatio: null,
    videoPlaying: true,
    videoLoop: true,
    keepVideoPosition: false,
};

export default Media;
