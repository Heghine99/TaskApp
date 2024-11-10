import React, { useRef } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AppText } from "@/src/uiKit/AppText";
import { theme } from "../../styles";

interface TaskInputProps {
  onAddTask: (name: string, description: string) => void;
}

export const TaskInputs: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const descriptionInputRef = useRef<TextInput>(null);

  const handleAdd = () => {
    if (name && description) {
      onAddTask(name, description);
      setName("");
      setDescription("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: "75%", gap: 20 }}>
        <View style={styles.inputsContainer}>
          <AppText variant="p3">Name:</AppText>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            onSubmitEditing={() => descriptionInputRef.current?.focus()}
          />
        </View>
        <View style={styles.inputsContainer}>
          <AppText variant="p3">Descr:</AppText>
          <TextInput
            style={styles.input}
            placeholder="Descr"
            value={description}
            onChangeText={setDescription}
            ref={descriptionInputRef}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={handleAdd}>
        <AppText variant="h2" fontWeight="bold" color={theme.colors.white}>
          Add
        </AppText>
      </TouchableOpacity>
    </View>
  );
};
