import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { addContact } from "../actions";

class AddContactScreen extends Component {
  static navigationOptions = {
    title: "Add Contact"
  };

  state = {
    user: "",
    number: ""
  };

  handleUserChange = value => {
    this.setState({ user: value });
  };

  handleNumberChange = value => {
    this.setState({ number: value });
  };

  handleSubmit = () => {
    const { user, number } = this.state;
    this.props.addContact(user, number);
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 15
        }}
      >
        <Input
          onChangeText={value => this.handleUserChange(value)}
          containerStyle={{ marginTop: 15 }}
          placeholder="Name"
        />
        <Input
          onChangeText={value => this.handleNumberChange(value)}
          containerStyle={{ marginTop: 15 }}
          placeholder="Phone Number"
        />
        <Button
          containerStyle={{ marginTop: 25 }}
          buttonStyle={{ height: 50, width: 250, backgroundColor: "#af0010" }}
          title="Submit"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

export default connect(null, { addContact })(AddContactScreen);
