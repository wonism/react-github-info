import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import AnchorWrapper from './AnchorWrapper';

const StyledBody = styled.section`
  padding: 4px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  opacity: 0.8;

  .fa {
    padding-right: 4px;
  }

  .float-right {
    float: right;
  }

  p {
    margin: 4px 0;
  }
`;

const Body = ({
  profile,
  blog,
  company,
  location,
  bio,
  description,
  renderOnly,
}) => (profile ? (
  <StyledBody>
    {blog ?
      <AnchorWrapper
        link={blog}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        <FontAwesome name="link" />
        Blog
      </AnchorWrapper> :
      null}
    {company ?
      <p>
        <FontAwesome name="users" />
        {company}
      </p> :
      null}
    {location ?
      <p>
        <FontAwesome name="map-marker" />
        {location}
      </p> :
      null}
    <p>{bio}</p>
  </StyledBody>
) : (
  <StyledBody>
    <p>{description}</p>
  </StyledBody>
));

Body.propTypes = {
  profile: PropTypes.bool,
  blog: PropTypes.string,
  company: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
  description: PropTypes.string,
  renderOnly: PropTypes.bool.isRequired,
};

Body.defaultProps = {
  profile: false,
  blog: '',
  company: '',
  location: '',
  bio: 'No Description',
  description: 'No Description',
};

export default Body;
