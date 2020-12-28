import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Vimeo (props)
{
    const {
        videoId,
        width,
        height,
        autoplay,
        loop,
        title,
        byLine,
        portrait,
        sideDock
    } = props;

    const config = `?autoplay=${autoplay}&loop=${loop}&title=${title}&byline=${byLine}&portrait=${portrait}&sidedock=${sideDock}`;

    return (
        <Wrapper>
            <Video
                src={`https://player.vimeo.com/video/${videoId}${config}`}
                width={width}
                height={height}
                frameBorder="0"
                allow="autoplay; fullscreen"
                mozallowfullscreen
                webkitallowfullscreen
                allowFullScreen
            />
            <script src="https://player.vimeo.com/api/player.js" />
        </Wrapper>
    );
};

Vimeo.propTypes = {
    videoId: PropTypes.number.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    autoplay: PropTypes.number,
    loop: PropTypes.number,
    title: PropTypes.boolean,
    byLine: PropTypes.boolean,
    portrait: PropTypes.boolean,
    sideDock: PropTypes.boolean,
};

Vimeo.defaultProps = {
    width: 640,
    height: 273,
    autoplay: 0,
    loop: 0,
    title: 0,
    byLine: 0,
    portrait: 0,
    sideDock: 0
};

const Wrapper = styled.div`
    padding:42.71% 0 0 0;
    position:relative;
`;

const Video = styled.iframe`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
`;