export const changeTabMode = (tabType) => (dispatch) => {
  dispatch({
    type:'CHANGE_TAB_MODE',
    payload: {
      tabType
    }
  });
};

export const addToFavoriteList = (favoriteList) => (dispatch) => {
  dispatch({
    type:'ADD_MOVIE_TO_FAVORITE',
    payload: {
      favoriteList
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