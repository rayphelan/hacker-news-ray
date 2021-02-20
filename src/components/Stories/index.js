import React from 'react';
import Error from '../Error';
import useHackerNews from '../../hooks/useHackerNews';
// import InfiniteScroll from 'react-infinite-scroll-component';

const Stories = (props) => {
  const { feed } = props.match.params;
  const {
    storyIds,
    error,
    status,
    statusText,
  } = useHackerNews(feed);

  return (
    <div className="container">
      {
        error ? (
          <Error
            status={status}
            statusText={statusText}
          />
        ) : null
      }
      {
        storyIds ? (
          storyIds.map(storyId => <p>{storyId}</p>)
        ) : null
      }
    </div>
  );
};

export default Stories;
