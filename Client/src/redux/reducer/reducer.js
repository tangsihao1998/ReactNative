export default initialState => (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_TAB_MODE': {
      return {
        ...state,
        tabType: payload.tabType
      };
    }
    case 'ADD_MOVIE_TO_FAVORITE': {
      return {
        ...state,
        favoriteList: payload.favoriteList
      }
    }
    case 'GET_FAVORITE_LIST': {
      return {
        ...state,
        favoriteList: payload.favoriteList
      }
    }
    case 'FETCH_MORE': {
      return {
        ...state,
        fetchMore: true,
      }
    }
    case 'DONE_FETCH_MORE': {
      return {
        ...state,
        fetchMore: false,
      }
    }
    case 'GET_NET_WORK': {
      return {
        ...state,
        network: payload.netWork
      }
    }
    default:
      return state;
  }
};