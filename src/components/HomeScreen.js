import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, List, ListItem } from "react-native-elements";

import { connect } from "react-redux";
import { signOut } from "../actions";

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
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: "flex-start", marginTop: 15 }}>
          <List>
            <ListItem
              hideChevron
              leftIcon={{ name: "folder-shared" }}
              title="Jano"
              subtitle="+421897654123"
            />
          </List>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 15 }}>
          <Button
            buttonStyle={{ borderRadius: 20, backgroundColor: "#af0010" }}
            title="Add Contact"
          />
        </View>
      </View>
    );
  }
}

export default connect(null, { signOut })(HomeScreen);
