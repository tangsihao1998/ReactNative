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

//import component
import actions from '../../redux/action/index';
import selectors from '../../redux/selector/index';

class NowPlaying extends React.Component { 

  constructor(props) {
    super(props);
    this.isFetching = false;
    this.state = {
      data: [],
      refreshing: false,
      loading: false,
    }
  }

  async componentDidMount() {
    const { loadPage } = this.props;
    const listMovie = await this.takeDataFromMovieDB(loadPage);
    const data = [...this.state.data,...listMovie.results];
    this.setState({
      data,
      loading: true,
    });
  }

  async componentDidUpdate (prevProps, prevState) {
    if(this.props.loadPage !== prevProps.loadPage && !this.isFetching) {
      this.isFetching = true;
      const listMovie = await this.takeDataFromMovieDB(this.props.loadPage);
      const data = [...this.state.data,...listMovie.results];
      this.setState({
        data,
      });
      console.log('come here in COmponent Did Update', this.state.data);
      this.isFetching = false;
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
    const data = await this.takeDataFromMovieDB();
    this.setState({
      data: data.results,
      refreshing: false
    });
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
  loadPage: selectors.getLoadPage(state),
  loadingState: selectors.getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  addToFavoriteList: (favoriteList) => dispatch(actions.addToFavoriteList(favoriteList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);
