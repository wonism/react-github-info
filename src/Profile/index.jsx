import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import Card from '../Card';

const API_ROOT = 'https://api.github.com/users';

export default class Profile extends PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    className: PropTypes.string,
    custom: PropTypes.string,
    renderOnly: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    custom: null,
    renderOnly: false,
  };

  state = { isDone: false };

  componentDidMount() {
    const address = `${API_ROOT}/${this.props.username}`;
    request
      .get(address)
      .then(({ body }) => {
        this.setState({ isDone: true, ...body });
      })
      .catch(() => {});
  }

  render() {
    const { className, custom, renderOnly } = this.props;
    const {
      isDone,
      html_url: url,
      avatar_url: avatar,
      name,
      login,
      public_repos: repos,
      public_gists: gists,
      followers,
      bio,
      company,
      location,
      blog,
    } = this.state;

    if (isDone) {
      return (
        <Card
          className={className}
          custom={custom}
          url={url}
          avatar={avatar}
          title={name}
          subTitle={login}
          blog={blog}
          company={company}
          location={location}
          bio={bio}
          repos={repos}
          gists={gists}
          followers={followers}
          profile
          renderOnly={renderOnly}
        />
      );
    }

    return null;
  }
}
