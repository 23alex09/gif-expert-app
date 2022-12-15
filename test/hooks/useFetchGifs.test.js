import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe( 'test on useFetchGifs hook', () => {

    const category = 'elden ring'

    test( 'should return the initial state', () => {

        const { result } = renderHook( () => useFetchGifs( category ) );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe( 0 );
        expect( isLoading ).toBeTruthy();
    } )

    test( 'should return an array of gifs and isLoading false', async () => {

        const { result } = renderHook( () => useFetchGifs( category ) );

        await waitFor(//Esperaremos a que se carguen las imagenes
            () => expect( result.current.images.length ).toBeGreaterThan( 0 )
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan( 0 );
        expect( isLoading ).toBeFalsy();
    } )
} ) 