import { useState } from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Text, TextInput } from "react-native-paper";

const Main = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Card
        style={{
          marginTop: 150,
        }}
      >
        <Card.Content>
          <Text variant="titleLarge">Log In</Text>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{ margin: 20 }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{ margin: 20 }}
          />
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default Main;
