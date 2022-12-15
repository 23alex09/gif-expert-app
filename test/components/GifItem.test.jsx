import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe( 'Test on GifItem component', () => {

    const title = 'Titulo de prueba';
    const url = 'https://url-de-prueba.es/gif.jpg';

    test( 'should match with the snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    } )

    test( 'should show the image with the title and the url', () => {
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        const { src, alt } = screen.getByRole( 'img' )
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    } )

    test( 'should show the title as text', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
    } )
} )