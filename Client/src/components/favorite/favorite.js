/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert, Image, TouchableWithoutFeedback, TouchableHighlight, FlatList } from 'react-native';
import { connect } from 'react-redux';

//import component
import actions from '../../redux/action/index';
import selectors from '../../redux/selector/index';

class Favorite extends React.Component { 

  constructor(props) {
    super(props);
  }

  _onRemove = () => {

  }
  
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item, index}) => {
    const image = 'https://image.tmdb.org/t/p/w500' + item.poster_path;
    return (
      <View>
        <View style={styles.slide}>
          <Image style={styles.poster} source={{uri: image}}/>
          <View style={styles.movieContent}>
            <Text style={styles.title}>{item.title}</Text>
            {item.adult ? <View style={styles.c18}>
                            <Text style={styles.age18}>C18</Text>
                          </View> : <View style={styles.c13}>
                                      <Text style={styles.age13}>C13</Text>
                                    </View>}
            <Text style={styles.releaseDate}>{ item.release_date }</Text>
          </View>
          <View style={styles.BtnContainer}>
            <TouchableHighlight
              style={styles.RemoveBtn}
              onPress={() => this._onRemove}>
              <Text style={styles.removeText}>X</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      );
  }
//   getFavoriteList
  render() {
    const {favoriteList} = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <ScrollView >
            <FlatList
              data={favoriteList}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            />
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  slide: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
    fontFamily: 'Cochin',
  },
  line: {
    borderColor: '#aca5a5',
    borderWidth: 1,
  },
  poster: {
    width: 100,
    height: 100,
  },
  movieContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    width: 190,
    color: '#000000',
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
    color: '#000000',
    fontSize: 12,
  },
  RemoveBtn: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  removeText: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  BtnContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  }
});

const mapStateToProps = (state) => ({
  favoriteList: selectors.getFavoriteList(state),
});

const mapDispatchToProps = (dispatch) => ({
  // addToFavoriteList: (favoriteList) => dispatch(actions.addToFavoriteList(favoriteList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);