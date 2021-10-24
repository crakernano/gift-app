import React from 'react'
import { useFeatchGifs } from '../hooks/useFeatchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

//    const [images, setImages] = useState([]);


    const {data, loading} = useFeatchGifs( category );

    return (
        <div className="card-grid">
            <h3>{category}</h3>
            {loading ? 'Cargando...' : ''}
                {
                data.map(img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ))
                }
        </div>
    )
}

GifGrid.protoType = {
    category: PropTypes.string.isRequired
}