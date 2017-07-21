import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainScreen from '../components/MainScreen';
import { initialMount } from 'raft/MainDuck';

class MainContainer extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <MainScreen message={this.props.message} />
    );
  }
}

const mapStateToProps = (state) => ({ message: state.getIn(['main', 'message']) });

export default connect(mapStateToProps, { initialMount })(MainContainer);