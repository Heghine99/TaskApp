import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import DeleteIcon from "../../assets/icons/delete.svg";
import { AppText } from "@/src/uiKit/AppText";

interface TaskItemProps {
  name: string;
  description: string;
  onDelete: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  name,
  description,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemInner}>
        <View style={styles.circleStyles} />
        <View>
          <AppText variant="h0" fontWeight="bold" color="">
            {name}
          </AppText>
          <AppText variant="p4" fontWeight="regular">
            {description}
          </AppText>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle} onPress={onDelete}>
        <DeleteIcon width={25} height={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};
