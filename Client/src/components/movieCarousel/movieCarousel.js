/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback, Modal, TouchableHighlight, ScrollView, Alert  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';

//import component
import actions from '../../redux/action/index';
import selectors from '../../redux/selector/index';

class movieCarousel extends React.Component { 

  constructor(props) {
    super(props);
    this._carousel = {};
    this.movieChoose = {};
    this.favoriteList = [];
    this.state = {
      modalVisible: false,
      movieChoose: {},
    }
  }

  _onScroll = () => {
    const { data, pageIncrement } = this.props;
    if(this._carousel.currentIndex === Math.floor(data.length / 2)) {
      console.log('come here');
      pageIncrement();
      console.log('End come here');
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  _onSnap = () => {
    this.setModalVisible(true);
    this.setState({
      movieChoose: this.props.data[this._carousel.currentIndex],
    })
  }

  addToFavoriteClick = (movieChoose) => {
    const { favoriteList, addToFavoriteList } = this.props;
    let check = false;
    for(let i = 0; i < favoriteList.length; i++ ){
      if(movieChoose.id === favoriteList[i].id) {
        check = true;
        break;
      }
    }
    if(check) {
      Alert.alert(
        'Add to Favorite',
        'This movie has been add to Favorite List before',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } else {
      this.favoriteList = [movieChoose,...favoriteList];
      addToFavoriteList(this.favoriteList);
      this.favoriteList = '';
      Alert.alert(
        'Add to Favorite',
        'Movie has been add to Favorite list',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  }

  _renderItem = ({item, index}) => {
    const image = 'https://image.tmdb.org/t/p/w500' + item.poster_path;
    return (
      <TouchableWithoutFeedback onPress={this._onSnap}>
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
      </TouchableWithoutFeedback>
      );
  }
  
  render() {
    const {modalVisible, movieChoose} = this.state;
    const {data} = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={data}
            renderItem={this._renderItem}
            sliderWidth={380}
            itemWidth={200}
            itemHeight={700}
            activeSlideAlignment={'center'}
            onScroll={this._onScroll}
          />
        </View>
        <Modal
          animationType='fade'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
        
          <View style={{marginTop: 22}}>
            <ScrollView >
              <View style={styles.slideDetail}>
                <View style={styles.content}>
                  <Image style={styles.posterDetail} source={{uri:`https://image.tmdb.org/t/p/w500${movieChoose.poster_path}`}}/>
                </View>
                <Text style={styles.titleDetail}>{movieChoose.title}</Text>
                {movieChoose.adult ?  <View style={styles.c18Detail}>
                                        <Text style={styles.age18Detail}>C18</Text>
                                      </View> : <View style={styles.c13Detail}>
                                                  <Text style={styles.age13Detail}>C13</Text>
                                                </View>}
                <Text style={styles.releaseDateDetail}>Original Language: {movieChoose.original_language}</Text>
                <Text style={styles.releaseDateDetail}>Release Date: { movieChoose.release_date }</Text>
                <Text style={styles.releaseDateDetail}>Popularity: { movieChoose.popularity }</Text>
                <Text style={styles.releaseDateDetail}>Rating: { movieChoose.vote_average }</Text>
                <Text style={styles.releaseDateDetail}>Vote: { movieChoose.vote_count }</Text>
                <Text style={styles.releaseDateDetail}>Overview: { movieChoose.overview }</Text>
              </View>
              <View style={styles.content}>
                <TouchableHighlight
                  style={styles.hideButton}
                  onPress={() => {
                    this.setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.hideButtonText}>Hide</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.addToFavoriteBtn}
                  onPress={() => this.addToFavoriteClick(movieChoose)}>
                  <Text style={styles.addFavoriteText}>Add to Favorite</Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
        </Modal>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',    
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    fontFamily: 'Cochin'
  },
  slide: {
    marginTop: 20,
    marginBottom: 20,
  },
  poster: {
    width: 200,
    height: 300,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  c13: {
    width: 22,
    borderColor: '#c0be2a',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 10,
  },
  age13: {
    color: '#c0be2a',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  c18: {
    width: 22,
    borderColor: '#c0412a',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 10,
  },
  age18: {
    color: '#c0412a',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  releaseDate: {
    color: '#ffffff',
    fontSize: 12,
  },

  // Modal
  slideDetail: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  posterDetail: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  titleDetail: {
    color: '#000000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 14,
  },
  c13Detail: {
    width: 22,
    borderColor: '#c0be2a',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 10,
  },
  age13Detail: {
    color: '#c0be2a',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  c18Detail: {
    width: 22,
    borderColor: '#c0412a',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 10,
  },
  age18Detail: {
    color: '#c0412a',
    textTransform: 'uppercase',
    fontSize: 10,
  },
  releaseDateDetail: {
    color: '#000000',
    fontSize: 12,
  },

  // Button Hide Modal
  hideButton: {
    backgroundColor: '#ca0707',
    borderColor: '#8a0505',
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  hideButtonText: {
    fontSize: 14,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  // Add to Favorite Button
  addToFavoriteBtn: {
    backgroundColor: '#ca0707',
    borderColor: '#8a0505',
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    paddingTop: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  addFavoriteText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  }
});

const mapStateToProps = (state) => ({
  favoriteList: selectors.getFavoriteList(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavoriteList: (favoriteList) => dispatch(actions.addToFavoriteList(favoriteList)),
  pageIncrement: () => dispatch(actions.pageIncrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(movieCarousel);
