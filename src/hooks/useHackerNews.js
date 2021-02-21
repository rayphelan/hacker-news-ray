import { useState, useEffect } from 'react';
import { fetchStory, fetchStoryIds, DEFAULT_FEED } from '../api/hackerNews';

const useHackerNews = (feed = DEFAULT_FEED) => {

  const [page, setPage] = useState(0);
  const [stories, setStories] = useState([]);
  const [storyIds, setStoryIds] = useState([]);
  const [error, setError] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const STORY_LIMIT = 15;

  const getRange = (limit, page = 0) => ({
    start: limit * page,
    stop: limit * (page + 1),
  });

  const fetchStoriesPerPage = async () => {
    const { start, stop } = getRange(STORY_LIMIT, page);
    const selectedStoryIds = storyIds.slice(start, stop);

    const requests = selectedStoryIds.map(id => fetchStory(id));
    const result = await Promise.all(requests);

    setStories([...stories, ...result]);
    setPage(page + 1);
  };

  useEffect(() => {
    setHasMore(storyIds.length > (STORY_LIMIT * page));
  }, [page, storyIds]);
  
  useEffect(() => {
    if(storyIds.length > 0) {
      fetchStoriesPerPage();
    }
  }, [storyIds]);

  useEffect(() => {
    setPage(0);
    setStories([]);

    fetchStoryIds(feed)
      .then(data => {
        setStoryIds(data);
        setPage(page + 1);
      })
      .catch(error => {
        setError(true);
        setStatusText(error);
      });

  }, [feed]);
  
  return { hasMore, error, statusText, fetchStoriesPerPage, stories };
};

export default useHackerNews;
