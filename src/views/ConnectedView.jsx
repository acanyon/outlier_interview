import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';

function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {
      return (
        <Layout pageName={pageName}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  const mapStateToProps = state => state;

  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
