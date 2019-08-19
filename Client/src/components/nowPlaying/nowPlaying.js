/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, RefreshControl, ProgressBarAndroid } from 'react-native';
import { connect } from 'react-redux';

//import component
import MovieCarousel from '../movieCarousel/movieCarousel';

//import redux
import actions from '../../redux/action/index';
import selectors from '../../redux/selector/index';

class NowPlaying extends React.Component { 

  constructor(props) {
    super(props);
    this.isFetching = false;
    this.pageLoad = 1;
    this.state = {
      data: [],
      refreshing: false,
      loading: false,
    }
  }

  async componentDidMount() {
    const listMovie = await this.takeDataFromMovieDB(this.loadPage);
    const data = [...this.state.data,...listMovie.results];
    this.setState({
      data,
      loading: true,
    });
  }

  async componentDidUpdate (prevProps, prevState) {
    if(this.props.fetchMore !== prevProps.fetchMore) {
      if(this.isFetching) {
        this.isFetching = false;
      } else {
        this.pageLoad = this.pageLoad + 1;
        const listMovie = await this.takeDataFromMovieDB(this.pageLoad);
        const data = [...this.state.data,...listMovie.results];
        this.setState({
          data,
        });
        this.isFetching = true;
        this.props.doneFetchMore();
      }
    }
  }

  takeDataFromMovieDB = (loadPage) => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${loadPage}&language=en-US&api_key=2156e3712ab67eb8be8e9e34a13bfde6`, {method: 'GET'})
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _onRefresh = async () => {
    this.setState({refreshing: true});
    this.pageLoad = 1;
    const data = await this.takeDataFromMovieDB(this.pageLoad);
    this.setState({
      data: data.results,
      refreshing: false
    });
    console.log(this.state.data.length);
  }

  render() {
    const {loading, refreshing, data} = this.state;
    return (
      <Fragment>
        {loading ? <RefreshControl refreshing={refreshing} onRefresh={this._onRefresh}>
                                <View style={styles.container}>
                                  <MovieCarousel data={data}/>
                                </View>
                              </RefreshControl> : <ProgressBarAndroid />}
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
  loadingState: selectors.getLoadingState(state),
  fetchMore: selectors.getFetchMore(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavoriteList: (favoriteList) => dispatch(actions.addToFavoriteList(favoriteList)),
  doneFetchMore: () => dispatch(actions.doneFetchMore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
