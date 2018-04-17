import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FaChain from 'react-icons/lib/fa/chain';
import FaGroup from 'react-icons/lib/fa/group';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import AnchorWrapper from './AnchorWrapper';

const StyledBody = styled.section`
  padding: 4px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  opacity: 0.8;

  svg {
    padding-right: 4px;
    font-size: 16px;
  }

  p {
    margin: 4px 0;

    svg,
    span {
      vertical-align: middle;
    }
  }

  a {
    cursor: pointer;
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
        <FaChain />
        <span>Blog</span>
      </AnchorWrapper> :
      null}
    {company ?
      <p>
        <FaGroup />
        <span>{company}</span>
      </p> :
      null}
    {location ?
      <p>
        <FaMapMarker />
        <span>{location}</span>
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
