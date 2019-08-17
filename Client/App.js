/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';

import { View, StatusBar, StyleSheet } from 'react-native';

//import Component
import Header from './src/components/header/header';
import BodyView from './src/components/bodyView/bodyView';
import { connect } from 'react-redux';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.appBackground}>
        <Header />
        <BodyView />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create ({
  appBackground: {
    backgroundColor: "#a8a8a8",
  }
});

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);