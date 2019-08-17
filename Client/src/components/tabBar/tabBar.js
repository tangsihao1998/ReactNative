/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import selectors from '../../redux/selector/index';
import actions from '../../redux/action/index';

//import component

class tabBar extends React.Component { 

  constructor(props) {
    super(props);
  }

  _onPressNow = () => {
    const {changeTabMode} = this.props;
    changeTabMode('Now Playing');
  }

  _onPressRated = () => {
    const {changeTabMode} = this.props;
    changeTabMode('Top Rated');
  }

  _onPressFavorite = () => {
    const {changeTabMode} = this.props;
    changeTabMode('Favorite');
  }

  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <View>
            <TouchableOpacity style={styles.tabBar} onPress={this._onPressNow}>
              <Text>Now Playing</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.tabBar} onPress={this._onPressRated}>
              <Text>Top Rated</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.tabBar} onPress={this._onPressFavorite}>
              <Text>Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  tabBar: {
    backgroundColor: '#aca8a5',
    borderWidth: 1,
    borderColor: '#9d9895',
    paddingLeft: 27,
    paddingRight: 27,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

const mapStateToProps = (state) => ({
  tabType: selectors.getTabType(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeTabMode: (tabType) => dispatch(actions.changeTabMode(tabType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(tabBar);