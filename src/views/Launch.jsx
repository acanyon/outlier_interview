import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Launch extends Component {
  render() {
    const { launch } = this.props;

    return (
      <li>
        <h2> { launch.mission_name } </h2>
        <Link to={`/rocket/${ launch.rocket.rocket_id }`}>
          { launch.rocket.rocket_name }
        </Link>
      </li>
    );
  }
}

export default Launch;
