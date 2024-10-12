import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const API_URL = "http://192.168.238.6:3000/chat"; // Replace with your actual API URL

const Chat = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [context, setContext] = useState([]);

  const makeApiCall = async (message) => {
    try {
      const response = await axios.post(`${API_URL}/`, { message });

      setSuggestions(response.data.suggestions);
      const newMessage = { user: message, ai: response.data.message };
      setContext((prevContext) => [...prevContext, newMessage]);
    } catch (error) {
      console.error("API call failed:", error);
      // In a production app, you'd want to show an error message to the user
    }
  };

  const handlePropose = () => {
    makeApiCall("Propose me some activities");
  };

  const handleShowBars = () => {
    makeApiCall("Show me the best bars");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      makeApiCall(searchQuery);
      setSearchQuery("");
    }
  };

  const renderChatMessage = ({ item }) => (
    <View style={styles.chatMessageContainer}>
      <Text style={styles.userMessage}>{item.user}</Text>
      <Text style={styles.aiMessage}>{item.ai}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.emoji}>😊</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePropose}>
          <Text style={styles.buttonText}>Propose moi des activités</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShowBars}>
          <Text style={styles.buttonText}>Montre moi les meilleurs bars</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.chatContainer}>
        <FlatList
          data={context}
          renderItem={renderChatMessage}
          keyExtractor={(item, index) => index.toString()}
          style={styles.chatList}
        />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Recherchez quoi faire"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  circleContainer: {
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e6f7ff",
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 50,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00a8ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  chatContainer: {
    flex: 1,
    width: "100%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  chatList: {
    flex: 1,
  },
  chatMessageContainer: {
    marginBottom: 10,
  },
  userMessage: {
    backgroundColor: "#e6f7ff",
    alignSelf: "flex-end",
    padding: 10,
    borderRadius: 10,
    marginLeft: 50,
  },
  aiMessage: {
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginRight: 50,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  micButton: {
    padding: 5,
  },
  suggestionList: {
    width: "100%",
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  venueName: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Chat;
