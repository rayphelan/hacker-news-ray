import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px auto;

  @media only screen and (min-width: 499px) {
    h1 {
      padding: 100px;
    }
  }
`;

const HomePage = () => {
  return (
    <div className="container">
      <Section className="typewriter">
        <h1>Welcome to Hacker News V3</h1>
      </Section>
    </div>
  );
};

export default HomePage;
