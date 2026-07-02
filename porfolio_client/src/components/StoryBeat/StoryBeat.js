import React from 'react';

export default function StoryBeat({ number, title, content }) {
    return (
        <div className='story-beat' data-aos='fade-up' data-aos-duration='1000'>
            <div className='story-number'>{number}</div>
            <div className='story-content'>
                <h3 className='story-title'>{title}</h3>
                <p className='story-text'>{content}</p>
            </div>
        </div>
    )
}
