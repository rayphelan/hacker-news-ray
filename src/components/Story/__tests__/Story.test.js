import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Story from '..';
import TimeAgo from 'react-timeago';

describe('<Story> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });

  const story = {
    by: 'Ray Phelan',
    kids: [1,2,3],
    score: 30,
    time: Date.now(),
    title: 'Test Story',
    url: 'https://www.example.com',
  };

  it('Renders the <Story> component correctly', () => {
    render(<Story story={story} />);

    expect(screen.getByText(/Test Story/)).toBeInTheDocument();
    expect(screen.getByText(/Ray Phelan/)).toBeInTheDocument();
    expect(screen.getByText(/score: 30/)).toBeInTheDocument();
    expect(screen.getByText(/3 comments/)).toBeInTheDocument();
    expect(screen.getByTestId('storylink')).toHaveAttribute('href', story.url);
    expect(screen.getByTestId('storylink')).toHaveAttribute('target', '_blank');
  });

});

describe('<TimeAgo> Test Suite', () => {

  beforeEach(() => {
    cleanup();
  });
  
  test('1 minute ago', () => {
    render(<TimeAgo date={Date.now() - 1000 * 60} />)
    expect(screen.getByText('1 minute ago')).toBeInTheDocument()
  });
  
  test('2 minutes ago', () => {
    render(<TimeAgo date={Date.now() - 2000 * 60} />)
    expect(screen.getByText('2 minutes ago')).toBeInTheDocument()
  });
  
  test('1 hour ago', () => {
    render(<TimeAgo date={Date.now() - 1000 * 60 * 60} />)
    expect(screen.getByText('1 hour ago')).toBeInTheDocument()
  });
  
  test('2 hours ago', () => {
    render(<TimeAgo date={Date.now() - 2000 * 60 * 60} />)
    expect(screen.getByText('2 hours ago')).toBeInTheDocument()
  });
  
  test('1 day ago', () => {
    render(<TimeAgo date={Date.now() - 1000 * 60 * 60 * 24} />)
    expect(screen.getByText('1 day ago')).toBeInTheDocument()
  });
  
  test('1 week ago', () => {
    render(
      <TimeAgo date={Date.now() - 1000 * 60 * 60 * 24 * 7} />,
    )
    expect(screen.getByText('1 week ago')).toBeInTheDocument()
  });
});
