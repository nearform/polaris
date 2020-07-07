import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center'
    },
    header: {
      fontSize: 18,
      marginBottom: 18
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18
    }
  };

  showApp = event => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Welcome to Polaris Storybook</Text>
        <Text style={this.styles.content}>This is a UI Component development environment for Polaris app.</Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null
};

Welcome.propTypes = {
  showApp: PropTypes.func
};
