import React from "react";
import { FlatList, StyleSheet, Text, View, ViewComponent } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";

//local
import Screen from "../components/Screen";
import SmallListItem from "../components/SmallListItem";
import colors from "../config/colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

export default function Account() {
  return (
    <Screen>
      <View style={styles.account}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          subtitle="mosh@gmail.com"
          style={styles.account}
        />
      </View>
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      {/* <SmallListItem
        icon="format-list-bulleted"
        color={colors.primary}
        title="My Listings"
      />
      <SmallListItem
        icon="email"
        color={colors.secondary}
        title="My Messages"
      />
      <SmallListItem
        icon="logout"
        color="#ffe66d"
        title="Logout"
        style={styles.logout}
      /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  account: {
    backgroundColor: colors.white,
    marginTop: 20,
    marginBottom: 40,
  },

  logout: {
    marginTop: 30,
  },
});
