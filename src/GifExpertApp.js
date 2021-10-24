import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categorias = ['Pokemon', 'Harry Potter', 'Gordipedos']
    const[categorias, setCategorias] = useState(['Pokemon']);

    //const handleAdd = () => {setCategorias([...categorias, "Mr Robot"]);}
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

