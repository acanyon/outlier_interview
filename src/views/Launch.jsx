import React, { Component } from 'react';

class Launch extends Component {
  render() {
    const { launch } = this.props;

    return (
      <li>
        <h2> { launch.mission_name } </h2>
        <div> { launch.rocket.rocket_name } </div>
        <div > { launch.rocket.rocket_id } </div>
      </li>
    );
  }
}

export default Launch;
