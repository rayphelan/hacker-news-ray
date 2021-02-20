import React from 'react';
import Error from '../Error';
import Story from '../Story';
import Loader from '../Loader';
import useHackerNews from '../../hooks/useHackerNews';
import InfiniteScroll from 'react-infinite-scroll-component';

const Stories = (props) => {
  const { feed } = props.match.params;
  const {
    stories,
    error,
    status,
    statusText,
    fetchStoriesPerPage,
    hasMore,
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
        stories ? (
            <InfiniteScroll
              dataLength={stories.length}
              next={fetchStoriesPerPage}
              hasMore={hasMore}
              loader={<Loader />}
              style={{
                height: '100%',
                overflow: 'visible',
              }}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>That's all folks!</b>
                </p>
              }
            >
              {
                stories.map((story) => {
                  return <Story key={story.id} story={story} />
                })
              }
            </InfiniteScroll>
        ) : null
      }
    </div>
  );
};

export default Stories;
