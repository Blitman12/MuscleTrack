import { Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: "#000000",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <Text style={styles.headerText}>Muscle Track</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontFamily: "EnsoBold",
    textAlign: "center",
    color: "#fff",
  },
});

export default Header;
