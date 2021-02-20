import React from 'react';
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

const By = styled.div`
  font-size: 0.75rem;
  padding: 3px 0;
  color: rgba(255,255,255,0.8);
`;

const Link = styled.a`
  color: rgba(255,255,255,0.9);
  text-decoration: none;

  &:hover {
    font-weight: bold;
    color: white;
  }
`;

const Story = (props) => {

  const {
    by,
    kids,
    score,
    time,
    title,
    url,
  } = props.story;
  
  return (
    <StoryContainer>
      <div className="typewriter">
        <Link href={url} title={title} target="_blank">
          <Title>{title}</Title>
        </Link>
        <By>
          <TimeAgo date={new Date(time * 1000).toISOString()} />, by {by}
          {` | score: ${score} ${kids ? ` | ${kids.length} comment${kids.length !== 1 ? 's' : ''}` : ''}`}
        </By>
      </div>
    </StoryContainer>
  );
};

export default Story;
