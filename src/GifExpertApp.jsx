import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState( [ 'rocket league' ] );

    const onAddCategory = ( newCategory ) => {
        newCategory = newCategory.toLowerCase();
        if ( categories.includes( newCategory ) ) return;
        setCategories( [ newCategory, ...categories ] )
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // onAddCategory={ setCategories } 
                onNewCategory={ newCategory => onAddCategory( newCategory ) }
            />

            {
                categories.map( ( category ) => (
                    <GifGrid key={ category } category={ category } />
                ) )
            }

        </>
    )
}
