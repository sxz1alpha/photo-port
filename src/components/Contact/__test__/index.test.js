import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        render(<Contact></Contact>)
    })

    it('matches snapshot', () => {
        const { asFragment } =render(<Contact></Contact>)
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('h1 is visible', () => {
    const { getByTestId } = render(<Contact/>)
    expect(getByTestId('Contact me')).toHaveTextContent('Contact me');
})

// describe('submit visible', () => {
//     const { getByTestId } =render(<Contact/>)
//     expect(getByTestId('button')).toHaveTextContent('Submit');
// })