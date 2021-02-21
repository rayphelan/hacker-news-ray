import { fetchStory, fetchStoryIds } from '../hackerNews';

jest.mock('../hackerNews', () => ({
  fetchStory: jest.fn(),
  fetchStoryIds: jest.fn(),
}));

describe('Hacker News API Test Suite', () => {

  const story = {
    by: 'Ray Phelan',
    id: 1,
    time: 1567209822,
    title: 'My hacker news',
    url: 'https://www.ray-phelan.com',
  };

  const storyIds = [123, 456];
  
  test('fetchStory', async () => {

    fetchStory.mockImplementation(() => Promise.resolve(story));
    const response = await fetchStory(1);

    expect(fetchStory).toHaveBeenCalledTimes(1);
    expect(response).toEqual(story);
  });

  test('fetchStoryIds', async () => {

    fetchStoryIds.mockImplementation(() => Promise.resolve(storyIds));
    const response = await fetchStoryIds('newstories');

    expect(fetchStoryIds).toHaveBeenCalledTimes(1);
    expect(response).toEqual(storyIds);
  });
});
