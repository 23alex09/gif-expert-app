import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//custom hook

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState( [] );
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }
    //el segndo parametro nos dice cuando ejecutaremos el callback, si esta vacio solo se ejecuta la primera vez que dibujamos el componente
    useEffect( // no puede devolver una promesa, tiene que devolver una funcion
        () => {
            getImages();
        }, [] )


    return {
        images,
        isLoading
    }
}
