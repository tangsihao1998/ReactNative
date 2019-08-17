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

