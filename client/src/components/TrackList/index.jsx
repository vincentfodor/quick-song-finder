import React from "react";
import Track from './Track';

import "./index.css";

const TrackList = ({tracks}) => {
    return (
        <div className="tracklist">
            {
                (tracks)
                    ? tracks.map(track => <Track key={track.id} trackId={track.id} trackName={track.name} trackImageUrl={track.album.images[0].url} trackArtists={track.artists} trackPopularity={track.popularity} trackExplicit={track.explicit} trackOpenLink={track.uri} trackPreviewUrl={track.preview_url} />)
                    : null
            }
        </div>
    )
}

export default TrackList;