import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( '../../src/hooks/useFetchGifs' );


describe( 'test on GifGrid component', () => {

    const category = 'elden ring';

    test( 'should show the loading', () => {

        useFetchGifs.mockReturnValue( {
            images: [],
            isLoading: true
        } )

        render( <GifGrid category={ category } /> )

        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );
    } )

    test( 'should show items when we load images from useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABD',
                title: 'elden ring',
                url: 'http://localhost/elden-ring.jpg'
            },
            {
                id: '123',
                title: 'elden patron',
                url: 'http://localhost/elden-patron.jpg'
            }
        ]

        useFetchGifs.mockReturnValue( {
            images: gifs,
            isLoading: false
        } )
        render( <GifGrid category={ category } /> )
        expect( screen.getAllByRole( 'img' ).length ).toBe( 2 );
    } )
} )