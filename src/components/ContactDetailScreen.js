import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import { removeContact } from "../actions";

class ContactDetailScreen extends Component {
  static navigationOptions = {
    title: "Contact Detail"
  };

  handleDelete = contactId => {
    const { removeContact, navigation } = this.props;
    removeContact(contactId);
    navigation.navigate("Home");
  };

  render() {
    const { user, number, key } = this.props.navigation.state.params;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 15
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>{user}</Text>
          <Text>{number}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Button
            containerStyle={{ marginRight: 10 }}
            buttonStyle={{ width: 100, height: 50, backgroundColor: "#af0010" }}
            title="Edit"
          />
          <Button
            containerStyle={{ marginLeft: 10 }}
            buttonStyle={{ width: 100, height: 50, backgroundColor: "#af0010" }}
            title="Delete"
            onPress={() => this.handleDelete(key)}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, { removeContact })(ContactDetailScreen);
