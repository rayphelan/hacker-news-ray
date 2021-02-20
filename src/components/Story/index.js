import React from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  font-size: 1rem;
  padding: 0.5rem 0;
  border-bottom: 0.1px solid greenyellow;
`;

const Title = styled.div`
  padding: 5px 0;
  color: white;
`;

const By = styled.div`
  font-size: 0.8rem;
  padding: 3px 0;
  color: #dddddd;
`;

const Story = (props) => {

  const {
    by,
    id,
    kids,
    score,
    time,
    title,
    type,
    url,
  } = props.story;
  
  return (
    <StoryContainer>
      <Title>
        {title}
      </Title>
      <By>By: {by}</By>
    </StoryContainer>
  );
};

export default Story;
