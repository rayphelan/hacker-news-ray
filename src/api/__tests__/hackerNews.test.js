import axios from 'axios';
import {
  fetchStory,
  fetchStoryIds,
  BASE_URL,
  DEFAULT_FEED,
} from '../hackerNews';

const storyIds = [1];

const story = {
  by: 'Ray Phelan',
  id: 1,
  time: 1567209822,
  title: 'My hacker news',
  url: 'https://www.ray-phelan.com',
  score: 30,
  kids: [1,2,3],
};

jest.mock('axios');

describe('Hack News API Test Suite', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetchStory gets a story by id', async () => {
    const id = 1;
    const url = `${BASE_URL}/item/${id}.json`;

    axios.get.mockImplementation(() => Promise.resolve({ data: story }));
    const response = await fetchStory(1);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(response).toEqual(story);
  });

  it('fetchStoryIds gets an array of story ids', async () => {
    const url = `${BASE_URL}/${DEFAULT_FEED}.json`;

    axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));
    const response = await fetchStoryIds();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(response).toEqual(storyIds);
  });
  
});
