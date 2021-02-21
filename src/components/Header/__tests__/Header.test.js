import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Header from '..';

describe('<Header> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  it('Renders the <Header> component correctly', () => {
    render(<Header />);

    expect(screen.getByText(/Hacker News/)).toBeInTheDocument();

  });

});