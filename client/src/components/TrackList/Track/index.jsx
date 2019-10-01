import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Track = ({trackId, trackName, trackImageUrl, trackArtists, trackPopularity, trackExplicit, trackOpenLink, trackPreviewUrl}) => {
    const renderTrackPopularityColor = () => {
        if(trackPopularity > 60) {
            return "track-popularity--color-green";
        } else if (trackPopularity > 40) {
            return "track-popularity--color-yellow";
        } else {
            return "track-popularity--color-red";
        }
    }

    return (
        <Link className="track-open-link" to={`/track/${trackId}`}>
            <div className="track-wrapper">
                <span className={`track-popularity ${renderTrackPopularityColor()}`} style={{width: `${trackPopularity}%`}}></span>
                <div className="track">
                    <img className="track-image" src={trackImageUrl} />
                    <div className="track-description">
                        <h2>{`${trackName}${trackExplicit ? ' (E)' : ''}`}</h2>
                        <p className="track-description-artists">
                            {
                                trackArtists.map(artist => <span className="track-description-artist">{artist.name}</span>)
                            }
                        </p>
                        <audio preload="none" controls src={trackPreviewUrl} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Track;