import React from 'react';
import {
  View
} from 'react-native';
import _ from 'lodash';
import { connectAnimation } from '@shoutem/animation';
import { connectStyle } from '@shoutem/theme';

const RNLinearGradientPropsKeys = Object.keys(RNLinearGradient.propTypes);

class LinearGradient extends React.Component {
  render () {
    const { props } = this;

    const style = { ..._.omit(props.style, RNLinearGradientPropsKeys) };

    return (
      <View/>
    );
  }
}

const AnimatedLinearGradient = connectAnimation(LinearGradient);
const StyledLinearGradient = connectStyle('shoutem.ui.LinearGradient')(AnimatedLinearGradient);

export {
  StyledLinearGradient as LinearGradient,
};
