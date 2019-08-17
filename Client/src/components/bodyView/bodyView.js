/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import selectors from '../../redux/selector/index';

//import component
import TabBar from '../tabBar/tabBar';
import NowPlaying from '../nowPlaying/nowPlaying';
import TopRated from '../topRated/topRated';
import Favorite from '../favorite/favorite';
class bodyView extends React.Component { 

  constructor(props) {
    super(props);
  }

  render() {
    const {tabType} = this.props;
    return (
      <Fragment>
        <View style={styles.container}>
          <TabBar />
            {(tabType === 'Now Playing') && <NowPlaying />}
            {(tabType === 'Top Rated') && <TopRated />}
            {(tabType === 'Favorite') && <Favorite />}
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
  tabType: selectors.getTabType(state),
});

export default connect(mapStateToProps, null)(bodyView);
