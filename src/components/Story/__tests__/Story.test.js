import React from 'react';
import { render, screen } from '@testing-library/react';
import Story from '..';

describe('<Story> Test Suite', () => {

  it('Renders the <Story> component', () => {
    render(<Story />);

    screen.debug();
  });

});
