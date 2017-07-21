import React, { Component } from 'react';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';

import { initialMount } from 'raft/MainDuck';
import MainScreen from '../components/MainScreen';

class MainContainer extends Component {
  componentWillMount() {
    this.props.initialMount();
  }

  render() {
    return (
      <MainScreen message={this.props.message} />
    );
  }
}

MainContainer.propTypes = {
  message: string.isRequired,
  initialMount: func.isRequired,
};

const mapStateToProps = state => ({ message: state.getIn(['main', 'message']) });

export default connect(mapStateToProps, { initialMount })(MainContainer);
