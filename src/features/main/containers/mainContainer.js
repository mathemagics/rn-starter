import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainScreen from '../components/MainScreen';

class MainContainer extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  }
  render() {
    return (
      <MainScreen message={this.props.message} />
    );
  }
}

const mapStateToProps = (state) => state.getIn(['main', 'message']);

export default MainContainer;