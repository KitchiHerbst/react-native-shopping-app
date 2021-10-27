import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

// import ListItem from "../components/ListItem";
// import ListItemSeparator from "../components/ListItemSeparator";

//local
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";

export default function Account({ navigation }) {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
      onPress: () => listingsPress(),
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      onPress: () => messagesPress(),
    },
  ];

  const messagesPress = () => navigation.navigate("Messages");

  const listingsPress = () => {
    console.log("listing");
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.account}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="mosh@gmail.com"
        />
      </View>
      <View style={styles.options}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={item.onPress}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: colors.white,
    marginTop: 20,
    marginBottom: 40,
  },
  options: {
    marginBottom: 30,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
