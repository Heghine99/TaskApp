import { store } from "@/src/store/store";
import { App } from "@/src/view/components/App";
import React from "react";
import { Provider } from "react-redux";

const RootApp: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default RootApp;
