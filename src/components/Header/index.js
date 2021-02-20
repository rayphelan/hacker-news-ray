import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  
  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

const Header = () => {
  return (
    <Section>
      <h1>Hacker News - Ray Phelan</h1>
    </Section>
  );
}

export default Header;