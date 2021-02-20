import { useState, useEffect } from 'react';
import { fetchStoryIds } from '../api/hackerNews';

const useHackerNews = (feed) => {

  const [storyIds, setStoryIds] = useState([]);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState('');
  const [statusText, setStatusText] = useState('');

  useEffect(() => {
    fetchStoryIds(feed)
      .then(({ data, ok, status, statusText}) => {
        setStoryIds(data);
        setError(!ok);
        if (!ok) {
          setStatus(status);
          setStatusText(statusText);
        }
      })
      .catch(error => {
        setStatus('Error');
        setStatusText(error);
      });
  }, [feed]);
  
  return { storyIds, error, status, statusText };
};

export default useHackerNews;
