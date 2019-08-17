/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';

//import component
import Avatar from '../avatar/avatar';
import HambugerMenu from '../hambugerMenu/hambugerMenu.js';

class Header extends React.Component { 

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <Avatar />
          <HambugerMenu />
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Header;
