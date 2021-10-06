import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

//local
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
import Screen from "../components/Screen";

const m = [
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

const Messages = () => {
  const [refresh, setRefresh] = useState(false);

  const [messages, setMessages] = useState(m);

  const deleteHandler = (messageId) => {
    setMessages(messages.filter((msg) => msg.id !== messageId));
  };

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
            showChevron={true}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteHandler(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refresh}
        onRefresh={() => messages}
      />
    </Screen>
  );
};

export default Messages;

const styles = StyleSheet.create({});
