
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']); //Hook useState

    // const handleAdd = (e) => {

    //     // Muy importante!!!!!

    //     //setCategories([...categories, 'Hunter']);
    //     setCategories(cats => [...cats, 'Hunter']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    )
        
    
    
};



