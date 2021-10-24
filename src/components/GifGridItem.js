import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = (img)=>{
    return(
        <div className="card animate_fadeIn">
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}