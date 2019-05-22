import React from 'react';

import './index.css';

const Section = ({
    sectionTitle,
    sectionDate,
    sectionKeywords,
    sectionLink
}) => {
    return (
        <div className="section">
            <h2 className="section-title">{ sectionTitle }</h2>
            <p className="section-date">{ sectionDate }</p>
            <div className="section-keywords">
                <label className="section-keyword">GitHub</label>
            </div>
            <a href={sectionLink.href} className="section-link">{ sectionLink.title }</a>
        </div>
    )
}

export default Section;