import { View, Text } from "react-native";
export const OrgItem = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "rgba(220,220,220, 0.6)",
        width: "100%",
        height: 66,
        marginBottom: 10,
      }}
    >
      <View>
        <Text style={{ padding: 10, fontWeight: "700", fontSize: 16 }}>
          texto
        </Text>
      </View>
    </View>
  );
};
