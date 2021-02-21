import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '..';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

describe('<Navbar> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  it('Renders the <Navbar> component correctly', () => {
    render(<Router><Navbar /></Router>);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByText(/Top Stories/)).toBeInTheDocument();
    expect(screen.getByText(/Latest Stories/)).toBeInTheDocument();
    expect(screen.getByText(/Best Stories/)).toBeInTheDocument();
  });

});