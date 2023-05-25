import { View, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const Footer = ({ location }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text style={{ fontSize: 14 }}>{location}</Text>
      <EvilIcons
        name="location"
        style={{ marginLeft: 5 }}
        size={24}
        color="black"
      />
    </View>
  );
};
