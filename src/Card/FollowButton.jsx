import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lineHeight } from '../constants';
import AnchorWrapper from './AnchorWrapper';

const StyledFollowButton = styled.section`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  line-height: ${lineHeight};
  background-color: #e6e6e6;
  background-image: linear-gradient(#fafafa, #eaeaea);
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 800;
`;

const FollowButton = ({
  url,
  renderOnly,
  children,
}) => (
  <StyledFollowButton>
    <AnchorWrapper
      link={url}
      target="_blank"
      rel="noopener noreferrer"
      isAnchor={!renderOnly}
    >
      {children}
    </AnchorWrapper>
  </StyledFollowButton>
);

FollowButton.propTypes = {
  url: PropTypes.string.isRequired,
  renderOnly: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default FollowButton;
