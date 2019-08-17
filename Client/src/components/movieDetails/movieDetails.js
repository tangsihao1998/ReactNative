/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, Modal, TouchableHighlight, TouchableWithoutFeedback, Image } from 'react-native';

//import component

class MovieDetails extends React.Component { 
 
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Fragment>
        {/* <TouchableWithoutFeedback onPress={this._onSnap}>
          <View style={styles.slide}>
            <Image style={styles.poster} source={{uri: image}}/>
            <Text style={styles.title}>{item.title}</Text>
            {item.adult ? <View style={styles.c18}>
                            <Text style={styles.age18}>C18</Text>
                          </View> : <View style={styles.c13}>
                                      <Text style={styles.age13}>C13</Text>
                                    </View>}
            <Text style={styles.releaseDate}>{ item.release_date }</Text>
          </View>
        </TouchableWithoutFeedback > */}
        {/* <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 22}}>
              <View>
                <Text>Hello World!</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}>
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </View> */}
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  
});

export default MovieDetails;
