import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe( 'test on AddCategory component', () => {
    test( 'should change the value in the text box', () => {
        render( <AddCategory onNewCategory={ () => { } } /> );
        const input = screen.getByRole( 'textbox' );

        fireEvent.input( input, { target: { value: 'elden ring' } } );
        expect( input.value ).toBe( 'elden ring' );
        // screen.debug();
    } )

    test( 'should call onNewCategory if the input has a value', () => {
        const inputValue = 'elden ring';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' ); //Ha habido que añadir un aria-label en el form

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe( '' );//Con Falsy funciona tambien
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    } )

    test( 'shouldn\'t be call onNewCategory if the input is empty', () => {
        const inputValue = 'e';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole( 'textbox' );
        const form = screen.getByRole( 'form' ); //Ha habido que añadir un aria-label en el form

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    } )
} )