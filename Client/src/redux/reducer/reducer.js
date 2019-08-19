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
    case 'PAGE_INCREMENT': {
      console.log('Reducer ',state.loadPage);
      return {
        ...state,
        loadPage: state.loadPage + 1,
      }
    }
    default:
      return state;
  }
};