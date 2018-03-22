import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, List, ListItem } from "react-native-elements";
import _ from "lodash";

import { connect } from "react-redux";
import { signOut, fetchContacts } from "../actions";

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: "Home",
      headerRight: (
        <Button
          title="Sign out"
          containerStyle={{ marginRight: 5 }}
          buttonStyle={{ backgroundColor: "#af0010" }}
          onPress={params.signOut}
        />
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ signOut: this.props.signOut });
    this.props.fetchContacts();
  }

  renderContacts() {
    const { contacts } = this.props;
    const { navigate } = this.props.navigation;
    return _.map(contacts, (value, key) => {
      return (
        <ListItem
          key={key}
          onPress={() => navigate("Detail", { ...value, key })}
          leftIcon={{ name: "folder-shared" }}
          title={value.user}
          subtitle={value.number}
        />
      );
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 15 }}>
          <List>{this.renderContacts()}</List>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 15 }}>
          <Button
            buttonStyle={{
              width: 300,
              height: 50,
              borderRadius: 20,
              backgroundColor: "#af0010"
            }}
            title="Add Contact"
            onPress={() => navigation.navigate("Add")}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps({ contacts }) {
  return {
    contacts
  };
}

export default connect(mapStateToProps, { signOut, fetchContacts })(HomeScreen);
