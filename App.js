import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppWithNavigationState from "./src/navigators/AppNavigator";
import { middleware } from "./src/utils/redux";
import AppReducer from "./src/reducers";

const store = createStore(AppReducer, applyMiddleware(middleware, thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
