import AsyncStorage from '@react-native-community/async-storage';

export const changeTabMode = (tabType) => (dispatch) => {
  dispatch({
    type:'CHANGE_TAB_MODE',
    payload: {
      tabType
    }
  });
};

export const getFavoriteListStorage = () => async (dispatch) => {
  let data = JSON.parse(await AsyncStorage.getItem('favoriteList'));
  if(data === null) {
    data = [];
  }
  dispatch({
    type:'GET_FAVORITE_LIST',
    payload: {
      favoriteList: data,
    }
  });
}

export const addToFavoriteList = (favoriteList) => async (dispatch) => {
  await AsyncStorage.removeItem('favoriteList');
  await AsyncStorage.setItem('favoriteList',  JSON.stringify(favoriteList));
  const data = JSON.parse(await AsyncStorage.getItem('favoriteList'));
  dispatch({
    type:'ADD_MOVIE_TO_FAVORITE',
    payload: {
      favoriteList: data,
    }
  });
};

export const fetchMore = () => (dispatch) => {
  dispatch({
    type:'FETCH_MORE',
  });
}

export const doneFetchMore = () => (dispatch) => {
  dispatch({
    type:'DONE_FETCH_MORE',
  });
}

export const changeNetwork = (netWork) => (dispatch) => {
  dispatch({
    type:'GET_NET_WORK',
    payload: {
      netWork,
    }
  });
}