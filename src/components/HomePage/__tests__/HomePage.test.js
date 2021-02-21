import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import HomePage from '..';

describe('<HomePage> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  it('Renders the <HomePage> component correctly', () => {
    render(<HomePage />);

    expect(screen.getByText(/Home page/)).toBeInTheDocument();

  });

});