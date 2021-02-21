const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const DEFAULT_FEED = 'newstories';

export const request = (url) => {
  return fetch(url).then(res => res.json());
};

export const fetchStory = async (id) => {
  const url = `${BASE_URL}/item/${id}.json`;
  const response = request(url);
  return response;
};

export const fetchStoryIds = async (feed = DEFAULT_FEED) => {
  const url = `${BASE_URL}/${feed}.json`;
  const response = request(url);
  return response;
};
