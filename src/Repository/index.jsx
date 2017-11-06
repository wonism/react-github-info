import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import fp from 'lodash/fp';
import Card from '../Card';

const API_ROOT = 'https://api.github.com/repos';

export default class Repository extends PureComponent {
  static propTypes = {
    username: PropTypes.string.isRequired,
    repos: PropTypes.string.isRequired,
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
    const address = `${API_ROOT}/${this.props.username}/${this.props.repos}`;
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
      name,
      owner,
      html_url: url,
      description,
      stargazers_count: stars,
      forks,
    } = this.state;

    if (isDone) {
      return (
        <Card
          custom={custom}
          className={className}
          url={url}
          subUrl={fp.get('html_url')(owner)}
          title={name}
          description={description}
          avatar={fp.get('avatar_url')(owner)}
          subTitle={fp.get('login')(owner)}
          stars={stars}
          forks={forks}
          owner={owner}
          repository
          renderOnly={renderOnly}
        />
      );
    }

    return null;
  }
}
