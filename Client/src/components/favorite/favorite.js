/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert, Image, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

//import component
import actions from '../../redux/action/index';
import selectors from '../../redux/selector/index';

class Favorite extends React.Component { 

  constructor(props) {
    super(props);
  }
//   getFavoriteList
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
});

const mapStateToProps = (state) => ({
  favoriteList: selectors.getFavoriteList(state),
});

const mapDispatchToProps = (dispatch) => ({
  // addToFavoriteList: (favoriteList) => dispatch(actions.addToFavoriteList(favoriteList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);