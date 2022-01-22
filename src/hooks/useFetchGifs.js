import { useState } from "react"
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                
                console.log(imgs)
                setState({
                    data: imgs,
                    loading: false,

                });
            })

    }, [category])  // Solo se ejecuta cuando la categoria cambia


    
   

    return state;
};