
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

class HambugerMenu extends React.Component { 

  constructor(props) {
    super(props);
  }
  
  onClick = () => {}

  render() {
    return (
      <Fragment>
        <TouchableOpacity 
          style={styles.Hambuger}
          onPress={this.onClick}>
            <Image
              style={styles.HambugerIcon}
              source={require('../../assets/hambugerIcon.png')}/>
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  HambugerIcon: {
    width: 20, 
    height: 20,
  },
  Hambuger: {
    height: 20,
    width: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HambugerMenu;
