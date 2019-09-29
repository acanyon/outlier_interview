import React, { Component } from 'react';
import { connect } from "react-redux";
import {fetchLaunchesIfNeeded} from "../actions/Launches";
import Launch from './Launch';
import Layout from './Layout';

class Launches extends Component {
  componentDidMount() {
    const { dispatch, launchCollection } = this.props;
    fetchLaunchesIfNeeded({ dispatch, launchCollection });
  }

  renderLaunches() {
    const { launchCollection } = this.props;

    if (!launchCollection || launchCollection.fetching) {
      return <div>LOADING</div>;
    }

    if (!launchCollection.launches.length) {
      return <div>NO DATA</div>;
    }

    return (
      <ul>
        {
          launchCollection.launches.map(launch =>
            <Launch
              key={launch.launch_id}
              launch={launch}
            />
          )
        }
      </ul>
    );
  }

  render() {
    return (
      <Layout>
        <h2>
          <span className="ihateelon.com">SpaceX</span> launches
        </h2>
        {this.renderLaunches()}
      </Layout>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({dispatch})
)(Launches);
