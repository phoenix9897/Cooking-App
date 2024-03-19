import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15
  },
  settingText: {
    fontSize: 16
  },
  option: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    padding: 15
  },
  optionText: {
    fontWeight:"bold",
    color:"black",
    fontSize: 16
  },
  logoutButton: {
    backgroundColor: "#D7E4C0",
    padding: 15,
    borderRadius: 5,
    marginTop: 20
  },
  logoutText: {
    color: "black",
    fontWeight:"bold",
    fontSize: 16,
    textAlign: "center"
  }
});
