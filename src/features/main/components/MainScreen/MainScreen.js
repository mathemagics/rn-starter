import React from 'react';
import PropTypes from 'prop-types';

import { Screen } from './styles';

const MainComponent = (props) => {
  return (
    <Screen>
      <Text>{props.message}</Text>
    </Screen>
  );
};

MainComponent.propTypes = {
  message: PropTypes.string.isRequired,
}

export default MainComponent;