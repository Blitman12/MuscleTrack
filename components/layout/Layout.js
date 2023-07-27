import { Text, View, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>{children}</View>
  );
};

export default Layout;
