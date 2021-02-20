const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const DEFAULT_FEED = 'newstories';

export const fetchStory = async (id) => {
  const url = ``;

};

export const fetchStoryIds = async (feed = DEFAULT_FEED) => {
  const url = `${BASE_URL}/${feed}.json`;
  const response = await (fetch(url));
  
  if (response.ok) {
    const result = await response.json();
    return {
      data: result,
      ok: true,
    }
  }

  return {
    data: [],
    ok: false,
    status: response.status,
    statusText: response.statusText,
  }
};
