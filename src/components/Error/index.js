import React from 'react';
import PropTypes from 'prop-types';
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

Error.propTypes = {
  status: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
};

export default Error;