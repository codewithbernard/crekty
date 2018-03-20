import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { listenForAuthStateChange, signOut } from "../actions";
import { connect } from "react-redux";

class AuthLoadingScreen extends Component {
  componentWillMount() {
    const { navigation, signOut } = this.props;
    const succes = () => navigation.navigate("App");
    const error = () => navigation.navigate("Auth");
    this.props.listenForAuthStateChange(succes, error);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#af0010" />
        <Text>Loading</Text>
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, {
  listenForAuthStateChange,
  signOut
})(AuthLoadingScreen);
