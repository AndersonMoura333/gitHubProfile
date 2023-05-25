import { View, Text, ScrollView, SafeAreaView } from "react-native";
export const UserInformationContainer = ({ title, children }) => {
  return (
    <View style={{ padding: 16, flex: 5 }}>
      <Text
        style={{
          paddingLeft: 5,
          marginBottom: 10,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {`${title}:`}
      </Text>
      <SafeAreaView>
        <ScrollView
          style={{
            borderRadius: 14,
            backgroundColor: "#fff",
            padding: 14,
            height: "90%",
            overflow: "scroll",
          }}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
