import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
];

const messageSelection = () => {
  console.log("message selected");
};

const deleteHandler = message => {
  console.log("delete");
};

const Messages = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.title}
            subtitle={item.description}
            onPress={messageSelection}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={deleteHandler} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default Messages;

const styles = StyleSheet.create({});
