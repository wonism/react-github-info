import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnchorWrapper from './AnchorWrapper';

const StyledFooter = styled.footer`
  padding: 4px;

  & > section {
    display: inline-block;
    padding: 4px 16px 0;

    &:first-child {
      padding: 4px 16px 0 0;
    }
  }

  div {
    font-size: 85%;
    opacity: 0.7;
  }
`;

const Footer = ({
  profile,
  subTitle,
  repos,
  gists,
  followers,
  url,
  stars,
  forks,
  renderOnly,
}) => (profile ? (
  <StyledFooter>
    <section>
      <AnchorWrapper
        link={`https://github.com/${subTitle}?tab=repositories`}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        <b>{repos}</b>
        <div>REPOS</div>
      </AnchorWrapper>
    </section>
    <section>
      <AnchorWrapper
        link={`https://gist.com/${subTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        <b>{gists}</b>
        <div>GISTS</div>
      </AnchorWrapper>
    </section>
    <section>
      <AnchorWrapper
        link={`https://github.com/${subTitle}/followers`}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        <b>{followers}</b>
        <div>FOLLOWERS</div>
      </AnchorWrapper>
    </section>
  </StyledFooter>
) : (
  <StyledFooter>
    <section>
      <AnchorWrapper
        link={`${url}/stargazers`}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        <b>{stars}</b>
        <div>STARS</div>
      </AnchorWrapper>
    </section>
    <section>
      <AnchorWrapper
        link={`${url}/network/members`}
        target="_blank"
        rel="noopener noreferrer"
        isAnchor={!renderOnly}
      >
        <b>{forks}</b>
        <div>FORKS</div>
      </AnchorWrapper>
    </section>
  </StyledFooter>
));

Footer.propTypes = {
  profile: PropTypes.bool,
  subTitle: PropTypes.string,
  repos: PropTypes.number,
  gists: PropTypes.number,
  followers: PropTypes.number,
  url: PropTypes.string.isRequired,
  stars: PropTypes.number,
  forks: PropTypes.number,
  renderOnly: PropTypes.bool.isRequired,
};

Footer.defaultProps = {
  profile: false,
  subTitle: '',
  repos: 0,
  gists: 0,
  followers: 0,
  stars: 0,
  forks: 0,
};

export default Footer;
