import React from "react";
import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { TaskInputs } from "../../components/TaskInput";
import { TaskItem } from "../../components/TaskItem";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "@/src/store/slices/tasksSlice";
import { tasksListSelector } from "@/src/store/slices/selectors";

export const HomeScreen: React.FC = () => {
  const { tasks } = useSelector(tasksListSelector);
  const dispatch = useDispatch();

  const addHandle = (name: string, description: string) => {
    dispatch(addTask({ id: Date.now().toString(), name, description }));
  };

  const deleteHandle = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <View style={styles.container}>
      <TaskInputs onAddTask={addHandle} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            name={item.name}
            description={item.description}
            onDelete={() => deleteHandle(item.id)}
          />
        )}
      />
    </View>
  );
};
