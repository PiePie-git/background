import React from "react";

export const PageState = React.createContext({
  status: "loading",
  userInfo: {},
});

export const SetPageState = React.createContext(() => { });
