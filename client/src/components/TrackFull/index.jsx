import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Sections from "./Sections";

import './index.css';

const TrackFull = ({match, accessToken}) => {
    const { trackid } = match.params;
    const [track, setTrack] = useState(false);
    const [trackInfo, setTrackInfo] = useState(false);
            
    useEffect(() => {
        axios.get(`https://api.spotify.com/v1/audio-analysis/${trackid}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(({data}) => setTrack(data));
        
        axios.get(`https://api.spotify.com/v1/tracks/${trackid}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(({data}) => { setTrackInfo(data); console.log(data) });
    }, [])
    
    return trackInfo
                ? (
                    <div className="trackfull">
                        <h1 className="trackfull-headline">
                            <a href={`http://www.vfodor.de/#access_token=${accessToken}`} className="trackfull-back-button">{'⇐ Search'}</a>
                            / {trackInfo.name}
                        </h1>
                        <div className="trackfull-overview">
                            <img className="trackfull-overview-image" src={trackInfo.album.images[0].url} />
                            <div className="trackfull-overview-description">
                                <div className="trackfull-overview-group">
                                    <p className="trackfull-text">Breakdown analysis</p>
                                    <Sections track={track} />
                                </div>
                            </div>
                        </div>    
                    </div>
                )
                : null
}

export default TrackFull;