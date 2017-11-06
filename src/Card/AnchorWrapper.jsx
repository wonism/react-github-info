import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: inline;
`;

const AnchorWrapper = ({
  link,
  isAnchor,
  children,
  ...otherProps,
}) => (
  isAnchor ? (
    <a href={link} {...otherProps}>
      {children}
    </a>
  ) : (
    <StyledSection>
      {children}
    </StyledSection>
  )
);

AnchorWrapper.propTypes = {
  link: PropTypes.string.isRequired,
  isAnchor: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.node]).isRequired,
};

export default AnchorWrapper;
