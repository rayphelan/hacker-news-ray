import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Stories from '..';

describe('<Stories> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  const match = {
    params: {
      feed: 'newstories',
    }
  };

  it('Renders the <Stories> component correctly', () => {
    render(<Stories match={match} />);

    screen.debug();
  });

});
