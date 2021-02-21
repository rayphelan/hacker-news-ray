import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorMessage = styled.div`
  color: red;
  padding-top: 1rem;
`;

const Error = ({ statusText }) => {
  return (
    <ErrorMessage>
      {`Oops - ${statusText}`}
    </ErrorMessage>
  );
};

Error.propTypes = {
  statusText: PropTypes.string.isRequired,
};

export default Error;