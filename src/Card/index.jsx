import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const cardBackgroundColor = theme('mode', {
  light: '#ffffff',
  dark: '#333333',
});

const cardColor = theme('mode', {
  light: '#333333',
  dark: '#ffffff',
});

const StyledCard = styled.article`
  display: inline-block;
  padding: 4px;
  width: 100%;
  max-width: 320px;
  color: ${props => (props.custom || cardColor)};
  background-color: ${cardBackgroundColor};
  border: 1px solid #eee;
  border-color: #eee #ddd #ccc;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;
  box-sizing: border-box;

  &::before,
  &::after {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: ${props => (props.custom || cardColor)};
    text-decoration: blink;
    cursor: pointer;

    &:focus,
    &:hover {
      opacity: 0.7;
    }
  }
`;

const Card = ({
  className,
  mode,
  custom,
  url,
  subUrl,
  avatar,
  title,
  subTitle,
  blog,
  company,
  location,
  bio,
  description,
  repos,
  gists,
  followers,
  stars,
  forks,
  profile,
  renderOnly,
}) => (
  <ThemeProvider theme={{ mode }}>
    <StyledCard
      className={className}
      role="presentation"
      custom={custom}
    >
      <Header
        url={url}
        subUrl={subUrl}
        avatar={avatar}
        title={title}
        subTitle={subTitle}
        renderOnly={renderOnly}
      />
      <Body
        blog={blog}
        company={company}
        location={location}
        bio={bio}
        description={description}
        profile={profile}
        renderOnly={renderOnly}
      />
      <Footer
        subTitle={subTitle}
        repos={repos}
        gists={gists}
        followers={followers}
        url={url}
        stars={stars}
        forks={forks}
        profile={profile}
        renderOnly={renderOnly}
      />
    </StyledCard>
  </ThemeProvider>
);

Card.propTypes = {
  className: PropTypes.string,
  mode: PropTypes.oneOf(['light', 'dark']),
  custom: PropTypes.string,
  ...Header.propTypes,
  ...Body.propTypes,
  ...Footer.propTypes,
};

Card.defaultProps = {
  className: '',
  mode: 'light',
  custom: null,
  ...Header.defaultProps,
  ...Body.defaultProps,
  ...Footer.defaultProps,
};

export default Card;
