const paintReducer = (state = 0, action) => {
  switch (action.type) {
    case "MOUSE_MODE":
      return action.payload;
    default:
      return state;
  }
};

export default paintReducer;
