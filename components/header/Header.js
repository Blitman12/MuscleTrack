import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Muscle Track" />
      <Appbar.Action icon="weight-lifter" onPress={() => {}} />
      {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
    </Appbar.Header>
  );
};

export default Header;
