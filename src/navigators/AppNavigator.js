import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addNavigationHelpers,
  StackNavigator,
  SwitchNavigator
} from "react-navigation";

import HomeScreen from "../components/HomeScreen";
import LoginScreen from "../components/LoginScreen";
import AuthLoadingScreen from "../components/AuthLoadingScreen";
import AddContactScreen from "../components/AddContactScreen";
import ContactDetailScreen from "../components/ContactDetailScreen";
import { addListener } from "../utils/redux";

const navigationConfig = {
  navigationOptions: ({ navigation }) => ({
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#af0010"
    },
    headerTitleStyle: { color: "white" },
    titleStyle: {
      textAlign: "center"
    }
  })
};

const AppStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddContactScreen },
    Detail: { screen: ContactDetailScreen }
  },
  navigationConfig
);
const AuthStack = StackNavigator(
  { Login: { screen: LoginScreen } },
  navigationConfig
);

export const AppNavigator = SwitchNavigator(
  { App: AppStack, Auth: AuthStack, AuthLoading: AuthLoadingScreen },
  { initialRouteName: "AuthLoading" }
);

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
