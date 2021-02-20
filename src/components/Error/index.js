import React from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
`;

const Error = ({ status, statusText }) => {
  return (
    <ErrorMessage>
      {`ERROR ${status}: ${statusText}`}
    </ErrorMessage>
  );
};

export default Error;