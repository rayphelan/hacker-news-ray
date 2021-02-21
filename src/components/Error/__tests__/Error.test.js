import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Error from '..';

describe('<Error> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  const statusText = 'Unauthorized';

  it('Renders the <Error> component correctly', () => {
    render(<Error statusText={statusText} />);

    expect(screen.getByText(/Unauthorized/)).toBeInTheDocument();

  });

});