import React, { Component } from 'react';

import './index.css';

import Section from '../Section';

class Timeline extends Component {
    state = {
        sections: [
            {
                id: 1,
                title: 'Make github repository',
                date: 'May 26th',
                keywords: [
                    {
                        title: 'GitHub',
                        color: '#24292E'
                    }
                ]
            }
        ]
    }
    
    render() {
        return (
            <div className="timeline">
                <div className="sections">
                    <Section 
                        key={1} 
                        sectionTitle="Make github repository" 
                        sectionDate="May 26th" 
                        sectionKeywords={[
                            {
                                title: "GitHub",
                                color: "#24292E"
                            },
                            {
                                title: "Facebook",
                                color: "blue"
                            }
                        ]}
                        sectionLink={{
                            title: "Visit GitHub Account",
                            href: "https://www.github.com/vincentfodor"
                        }} 
                    />
                    <Section 
                        key={2} 
                        sectionTitle="Make github repository" 
                        sectionDate="May 26th" 
                        sectionKeywords={[
                            {
                                title: "GitHub",
                                color: "#24292E"
                            }
                        ]}
                        sectionLink={{
                            title: "Visit GitHub Account",
                            href: "https://www.github.com/vincentfodor"
                        }} 
                    />
                </div>
                <div className="timeline-route"></div>
            </div>
        )
    }
}

export default Timeline;