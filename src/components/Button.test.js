import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders a Button snapshot', () => {
    const button = renderer.create(<Button name={1} />).toJSON();
    expect(button).toMatchSnapshot();
});