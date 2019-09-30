import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchRocketIfNeeded } from "../actions/Rocket";
import Layout from './Layout';

class Rocket extends Component {
  componentDidMount() {
    const { dispatch, rocketCollection } = this.props;
    const { rocketId } = this;
    fetchRocketIfNeeded({ dispatch, rocketCollection, rocketId });
  }

  get rocketId () {
    return this.props.match.params.rocket_id;
  }

  get rocket () {
    const { rocketCollection } = this.props;
    return rocketCollection && rocketCollection.rockets[this.rocketId];
  }

  renderRocket() {
    const { rocketCollection } = this.props;
    const { rocket } = this;

    if (!rocketCollection || rocketCollection.fetching) {
      return <div>LOADING</div>;
    }

    if (!rocket) {
      return <div>NO DATA</div>;
    }

    return (
      <React.Fragment>
        <h2 className="rocket_name">{ rocket.rocket_name }</h2>
        <div className="description">{ rocket.description }</div>
        <br />
        <div className="img_container">
          { rocket.flickr_images.map(img_url =>
              <img src={ img_url } />
            )
          }
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Layout>
        <div className="rocket">
          {this.renderRocket()}
        </div>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({dispatch})
)(Rocket);
