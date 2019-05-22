import React from 'react';

import './index.css';

const Section = ({
    sectionTitle,
    sectionDate,
    sectionKeywords,
    sectionLink
}) => {
    const renderKeywordList = sectionKeywords.map((keyword, index) => <label 
                                                                key={index}
                                                                className="section-keyword"
                                                                style={{ backgroundColor: keyword.color }}
                                                                >{ keyword.title }</label>)

    return (
        <div className="section">
            <h2 className="section-title">{ sectionTitle }</h2>
            <p className="section-date">{ sectionDate }</p>
            <div className="section-keywords">
                { renderKeywordList }
            </div>
            <a href={sectionLink.href} className="section-link">{ sectionLink.title }</a>
            <span className="section-stamp"></span>
        </div>
    )
}

export default Section;