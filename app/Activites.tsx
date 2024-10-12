import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

interface SelectionOption {
  id: string;
  label: string;
}

interface SelectionGroup {
  title: string;
  options: SelectionOption[];
  stateKey: "companion" | "budget" | "location";
}

const RestaurantSelectionForm: React.FC = () => {
  const [selections, setSelections] = useState({
    companion: "",
    budget: "",
    location: "",
  });

  const selectionGroups: SelectionGroup[] = [
    {
      title: "Avec qui ?",
      options: [
        { id: "seul", label: "Seul" },
        { id: "couple", label: "En couple" },
        { id: "amis", label: "Entre amis" },
        { id: "famille", label: "En famille" },
      ],
      stateKey: "companion",
    },
    {
      title: "Votre budget ?",
      options: [
        { id: "0-10", label: "0-10 €" },
        { id: "10-20", label: "10-20 €" },
        { id: "20-50", label: "20-50 €" },
        { id: "50+", label: "50+ €" },
      ],
      stateKey: "budget",
    },
    {
      title: "Ou ?",
      options: [
        { id: "environs", label: "Dans les environs " },
        { id: "ailleurs", label: "Ailleurs" },
      ],
      stateKey: "location",
    },
  ];

  const handleSelection = (
    stateKey: "companion" | "budget" | "location",
    value: string
  ) => {
    setSelections((prevState) => ({
      ...prevState,
      [stateKey]: value,
    }));
  };

  const submitSelections = () => {
    // Here you would typically send the selections to your backend
    console.log("Selections to send to backend:", selections);
    // Example of how you might send this data to a backend:
    // fetch('your-api-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(selections),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Success:', data))
    // .catch((error) => console.error('Error:', error));
  };

  return (
    <ScrollView style={styles.container}>
      {selectionGroups.map((group) => (
        <View key={group.title} style={styles.selectionGroup}>
          <Text style={styles.groupTitle}>{group.title}</Text>
          <View style={styles.optionsContainer}>
            {group.options.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.option,
                  selections[group.stateKey] === option.id &&
                    styles.selectedOption,
                ]}
                onPress={() => handleSelection(group.stateKey, option.id)}
              >
                <Text style={styles.optionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={submitSelections}>
        <Text style={styles.submitButtonText}>Rechercher</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  selectionGroup: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  option: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedOption: {
    backgroundColor: "#3498db",
  },
  optionText: {
    color: "#333",
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantSelectionForm;
