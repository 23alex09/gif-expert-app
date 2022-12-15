import { useState, useEffect } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { getGifs } from '../helpers/getGifs'
import PropTypes from 'prop-types'


//useEffect efecto secundarios -> cosas que queremos ejecutar en consecuencia de algun cambio
export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid"> {/*className es el equivalente a class*/ }
                {
                    images.map( ( image ) => (
                        <GifItem key={ image.id } { ...image } />
                        //Esparcimos las propiedades de la image para no tener que andar poniendola una a una
                    ) )
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}