import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Tags = ({tags}) => {
    const renderTags = () => {
        if (!tags) return null;
        return tags.map((t, i) => {
            const tag = t.split('_').join(' ').toLowerCase();

            return (
                <div key={`tag-${i}`} className="tag">
                    {tag}
                </div>
            )
        })
    };

    return (
        <div className="tags-wrapper">
            {renderTags()}
        </div>
    )
};

Tags.propTypes = {
    tags: PropTypes.array
};

export default Tags;