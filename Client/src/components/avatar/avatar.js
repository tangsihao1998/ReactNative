/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

class Avatar extends React.Component { 

  constructor(props) {
    super(props);
  }
  
  onClick = () => {}

  render() {
    return (
      <Fragment>
        <View style={styles.avatarContainer} >
          <TouchableOpacity 
            style={styles.avatar}
            onPress={this.onClick}>
              <Image
                style={styles.img}
                source={require('../../assets/avatar.png')}/>
          </TouchableOpacity>
          <Text style={styles.title}>Cultureplex</Text>
          <Text style={styles.theaterName}>CCG</Text>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 15, 
    height: 15,
    borderRadius: 7.5,
  },
  title: {
    fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
  },
  theaterName: {
    fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 5,
    color: '#c96464',
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default Avatar;
