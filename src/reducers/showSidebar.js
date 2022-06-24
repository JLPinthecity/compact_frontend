const initialState = {
  showSidebar: false,
};
const showSidebar = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return true;

    default:
      return state;
  }
};

export default showSidebar;
