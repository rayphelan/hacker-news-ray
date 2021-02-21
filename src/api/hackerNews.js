import axios from 'axios';

export const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
export const DEFAULT_FEED = 'newstories';

export const fetchStory = async (id) => {
  const url = `${BASE_URL}/item/${id}.json`;
  const response = await axios.get(url).then(({ data }) => data);
  
  return response;
};

export const fetchStoryIds = async (feed = DEFAULT_FEED) => {
  const url = `${BASE_URL}/${feed}.json`;
  const response = await axios.get(url).then(({ data }) => data);
  
  return response;
};
