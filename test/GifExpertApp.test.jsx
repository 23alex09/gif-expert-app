import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from '../src/GifExpertApp'

describe( 'test on GifExpertApp component', () => {

    const category = 'elden ring';

    test( 'should show the new category if it does not exists', () => {
        render( <GifExpertApp /> );
        // screen.debug();

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        expect( screen.getByText( category ) ).toBeTruthy();
    } )

    test( 'should show the new category only once if it already exists', () => {
        render( <GifExpertApp /> );
        // screen.debug();

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' );

        fireEvent.input( input, { target: { value: category } } );
        fireEvent.submit( form );

        expect( screen.getByText( category ) ).toBeTruthy();
        expect( screen.getAllByText( category ).length ).toBe( 1 );
    } )
} )