import React from 'react'

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifgridItem } from './GifGridItem';



export const GifGrid = ({category}) => {

   
    const {data:images,loading} = useFetchGifs(category);
    

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
             { loading && <p className='animate__animated animate__flash'>Loading</p>}

           
            <div className="card-grid">
                
                {
                    images.map((img) => (
                    <GifgridItem
                        key={img.id}
                        {...img} // pasas los objetos por separado
                        //img={img} // Pasas 10 objetos
                        />
                    ))
                }
                    
            </div>
        </>
    )
}
