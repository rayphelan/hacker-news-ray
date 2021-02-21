import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px auto;

  @media only screen and (min-width: 499px) {
    p {
      padding: 100px;
    }
  }
`;

const HomePage = () => {
  return (
    <div className="container">
      <Section className="typewriter">
        <p>Welcome to the Hacker News redesign</p>
      </Section>
    </div>
  );
};

export default HomePage;
