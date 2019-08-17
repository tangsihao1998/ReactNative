/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { View, StyleSheet, RefreshControl, ProgressBarAndroid } from 'react-native';

//import component
import MovieCarousel from '../movieCarousel/movieCarousel';

class TopRated extends React.Component { 

 constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false,
      loading: false,
    }
  }

  async componentDidMount() {
    const data = await this.takeDataFromMovieDB();
    this.setState({
      data: data.results,
      loading: true,
    });
  }

  takeDataFromMovieDB = () => {
    return fetch('https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=2156e3712ab67eb8be8e9e34a13bfde6', {method: 'GET'})
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

export default TopRated;
