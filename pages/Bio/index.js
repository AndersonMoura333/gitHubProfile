import { View, Text, Image, StyleSheet } from "react-native";
import { UserPrifile } from "../../components/UserProfile";
import { UserInformationContainer } from "../../components/UserInformationContainer";
import { Footer } from "../../components/Footer";
export const Bio = ({ route }) => {
  const { user } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 5,
        }}
      >
        <UserPrifile user={user} />
      </View>

      <UserInformationContainer title={"Biografia"}>
        <Text style={{ fontSize: 16 }}>{user.bio}</Text>
      </UserInformationContainer>
      <Footer location={user.location} />
    </View>
  );
};

const styles = StyleSheet.create({
  userImage: { width: 190, height: 190, borderRadius: 70, marginTop: 40 },

  userName: {
    fontSize: 34,
    color: "#000",
    fontWeight: "bold",
  },

  userNickname: {
    fontSize: 20,
    color: "grey",
  },
});
