import React from 'react';
import PropTypes from 'prop-types';
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
            >
              {
                stories.map((story) => {
                  return story && <Story key={story.id} story={story} />
                })
              }
            </InfiniteScroll>
        ) : null
      }
    </div>
  );
};

Stories.propTypes = {
  history: PropTypes.instanceOf(Object),
  location: PropTypes.instanceOf(Object),
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      feed: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

Stories.defaultProps = {
  history: {},
  location: {},
  match: {},
};

export default Stories;
