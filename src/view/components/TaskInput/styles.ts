import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    justifyContent: "space-between",
  },
  inputsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 5,
    flex: 1,
  },
  buttonStyle: {
    width: 70,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
