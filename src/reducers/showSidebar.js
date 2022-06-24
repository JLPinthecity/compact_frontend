const showLinks = false;

const showSidebar = (state = showLinks, action) => {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return !showLinks;

    case "CLOSE_SIDEBAR":
      return showLinks;

    default:
      return state;
  }
};

export default showSidebar;
