const userReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_NULL":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
