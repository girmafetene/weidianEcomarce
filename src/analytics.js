// analytics.js

import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-PGWQEK69NK"); // Replace with your actual tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "test action") => {
  if (category && action) {
    ReactGA.event({ category, action });
    console.log({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
