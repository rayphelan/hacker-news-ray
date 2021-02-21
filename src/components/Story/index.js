import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';

const StoryContainer = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 0.1px solid greenyellow;
`;

const Title = styled.div`
  padding: 5px 0;
`;

const By = styled.span`
  font-size: 0.75rem;
  padding: 3px 0;
  color: rgba(255,255,255,0.8);
`;

const TimeSpan = styled(By)``;
const Score = styled(By)``;
const Kids = styled(By)``;

const Link = styled.a`
  color: rgba(255,255,255,0.9);
  text-decoration: none;

  &:hover {
    font-weight: bold;
    color: white;
  }
`;


const Story = ({ story }) => {
  const {
    by,
    kids,
    score,
    time,
    title,
    url,
  } = story;
  
  return (
    <StoryContainer>
      <div className="typewriter">
        <Link data-testid="storylink" href={url} title={title} target="_blank">
          <Title>{title}</Title>
        </Link>
        { 
          time &&
            <TimeSpan>
              <TimeAgo date={new Date(time * 1000).toISOString()} />
              {' | '}
            </TimeSpan>
        }
        {
          by &&
            <By>{by}{' | '}</By>
        }
        {
          score &&
            <Score>{`score: ${score}`}{' | '}</Score>
        }
        {
          kids &&
            <Kids>{`${kids.length} comment${kids.length !== 1 && 's'}`}</Kids>
        }
      </div>
    </StoryContainer>
  );
};

Story.propTypes = {
  story: PropTypes.shape({
    by: PropTypes.string,
    descendants: PropTypes.number,
    id: PropTypes.number,
    score: PropTypes.number,
    time: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }),
};

Story.defaultProps = {
  story: {},
};

export default Story;
