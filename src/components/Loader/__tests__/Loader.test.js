import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Loader from '..';

describe('<Loader> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  it('Renders the <Loader> component correctly', () => {
    render(<Loader />);

    expect(screen.getByTestId('dot1')).toBeInTheDocument();
    expect(screen.getByTestId('dot2')).toBeInTheDocument();
    expect(screen.getByTestId('dot3')).toBeInTheDocument();
  });

});