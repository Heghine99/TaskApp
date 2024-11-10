import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  itemInner: {
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
  circleStyles: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "green",
  },
  buttonStyle: {
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
