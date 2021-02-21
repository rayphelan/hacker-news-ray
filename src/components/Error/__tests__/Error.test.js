import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Error from '..';

describe('<Error> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  const status = 401;
  const statusText = 'Unauthorized';

  it('Renders the <Error> component correctly', () => {
    render(<Error status={status} statusText={statusText} />);

    expect(screen.getByText(/401: Unauthorized/)).toBeInTheDocument();

  });

});