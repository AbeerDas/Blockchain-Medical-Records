export const providerReducer = (state = {}, action) => {
    switch (action.type) {
      case "PROVIDER_LOADED":
        return { 
            ...state, 
            connection: action.connection 
        };
        default:
      return state;
  }
};