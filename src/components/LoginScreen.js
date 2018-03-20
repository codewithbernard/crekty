import React, { Component } from "react";
import { SocialIcon } from "react-native-elements";
import { connect } from "react-redux";
import { signInWithGoogle } from "../actions";
import { View } from "react-native";

class LoginScreen extends Component {
  static navigationOptions = { title: "Login" };

  handleLogin = () => {
    const { signInWithGoogle, navigation } = this.props;
    signInWithGoogle();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20
        }}
      >
        <SocialIcon
          title="Sign in with google"
          button
          onPress={this.handleLogin}
          type="google-plus-official"
        />
      </View>
    );
  }
}

export default connect(null, { signInWithGoogle })(LoginScreen);
