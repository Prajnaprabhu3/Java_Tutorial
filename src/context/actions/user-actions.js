export const SET_USER = (user) => {
  return {
    type: "SET_USER",
    user: user,
  };
};

export const SET_NULL = () => {
  return {
    type: "SET_NULL",
    user: null,
  };
};
