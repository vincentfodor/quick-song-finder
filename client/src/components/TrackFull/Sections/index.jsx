import React from 'react';
import moment from 'moment';

import './index.css';

const Sections = ({track, trackUri}) => {
    return (
        <div className="sections">
            {track ? (
              track.sections.map((section, index) => (
                <a href={`${trackUri}#${moment(section.start*1000).format('mm:ss')}`}>
                  <div
                    key={index}
                    className="section"
                    style={{
                      width: `${(section.duration / track.track.duration) * 100}%`,
                      backgroundColor: `rgba(255, 0, 0, ${(section.loudness * -1) / 10})`
                    }}
                  >
                        <p className="section-start-time">{ moment(section.start*1000).format('mm:ss') }</p>
                  </div>
                </a>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
    )
}

export default Sections;