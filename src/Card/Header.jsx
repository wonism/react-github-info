import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaStar from 'react-icons/lib/fa/star';
import { lineHeight } from '../constants';
import FollowButton from './FollowButton';
import AnchorWrapper from './AnchorWrapper';

const StyledHeader = styled.header`
  position: relative;
  padding: 4px 4px 4px 60px;
  line-height: ${lineHeight};
  border-bottom: 1px solid #eee;

  svg {
    padding-right: 4px;
    font-size: 16px;
  }

  h4 {
    display: inline;
    margin: 0;
    line-height: inherit;
    font-size: 18px;
    font-weight: 500;
  }

  span {
    line-height: inherit;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.7;
  }

  img {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 48px;
    height: 48px;
    border-radius: 4px;
  }

  a {
    cursor: pointer;
  }
`;

const Header = ({
  url,
  subUrl,
  avatar,
  title,
  subTitle,
  renderOnly,
}) => (subUrl ? (
  <StyledHeader>
    <img
      src={avatar}
      width="48"
      height="48"
      alt={title}
    />
    <AnchorWrapper
      link={url}
      target="_blank"
      rel="noopener noreferrer"
      isAnchor={!renderOnly}
    >
      <h4>{title}</h4>
    </AnchorWrapper>
    <br />
    <span>
      Created By
      &nbsp;
      <AnchorWrapper
        link={subUrl}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        {subTitle}
      </AnchorWrapper>
    </span>
    <FollowButton
      url={url}
      renderOnly={renderOnly}
    >
      <FaStar />STAR
    </FollowButton>
  </StyledHeader>
) : (
  <StyledHeader>
    <img
      src={avatar}
      width="48"
      height="48"
      alt={title}
    />
    <AnchorWrapper
      link={url}
      target="_blank"
      rel="noopener noreferrer"
      isAnchor={!renderOnly}
    >
      <h4>{title}</h4>
      <br />
      <span>@{subTitle}</span>
    </AnchorWrapper>
    <FollowButton
      url={url}
      renderOnly={renderOnly}
    >
      FOLLOW
    </FollowButton>
  </StyledHeader>
));

Header.propTypes = {
  url: PropTypes.string.isRequired,
  subUrl: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  renderOnly: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  subUrl: '',
};

export default Header;
