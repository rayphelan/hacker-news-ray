import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from '..';

describe('<App> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  it('Renders the <App> component correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

});