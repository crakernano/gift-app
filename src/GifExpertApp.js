import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories = []}) => {


    const[categorias, setCategorias] = useState(defaultCategories);


    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr></hr>

            <ol>
                {
                categorias.map(categoria=> <GifGrid
                                                    category={categoria}
                                                    key={categoria}
                                                    />
                                )
                }

            </ol>
        </div>
    )
}

