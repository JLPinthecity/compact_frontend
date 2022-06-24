const showSidebar = (state = false, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return true;

    case "CLOSE_SIDEBAR":
      return false;

    default:
      return state;
  }
};

export default showSidebar;

//we want to set up current user in state
