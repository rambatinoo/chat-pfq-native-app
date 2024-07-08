import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { timeSince } from "../utils/TimeAgo";
export const MessageBubble = ({ body, timestamp, to }) => {
  return (
    <View>
      <View
        style={[
          styles.container,
          to === "admin" ? styles.sender : styles.receiver,
        ]}
      >
        <Text
          style={to === "admin" ? styles.messageText : styles.messageTextAdmin}
        >
          {body}
        </Text>
      </View>
      <Text style={to === "admin" ? styles.timestamp : styles.timestampAdmin}>
        {timeSince(timestamp)}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: "100%",
  },
  timestamp: {
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: "80%",
    marginLeft: 250,
  },
  timestampAdmin: {
    padding: 10,
    marginBottom: 10,
    marginTop: -10,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  sender: {
    backgroundColor: "#21409A",
    alignSelf: "flex-end",
    marginBottom: -8,
    marginTop: -5,
  },
  receiver: { backgroundColor: "#E7E7E7", marginRight: 200 },
  messageText: { color: "#fff" },
  messageTextAdmin: { color: "#000" },
});
