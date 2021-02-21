import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
  padding-top: 1rem;
`;

const Error = ({ status, statusText }) => {
  return (
    <ErrorMessage>
      {`ERROR ${status}: ${statusText}`}
    </ErrorMessage>
  );
};

Error.propTypes = {
  status: PropTypes.number.isRequired,
  statusText: PropTypes.string.isRequired,
};

export default Error;