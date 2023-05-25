import { View } from "react-native";
import { UserPrifile } from "../../components/UserProfile";
import { UserInformationContainer } from "../../components/UserInformationContainer";
import { Footer } from "../../components/Footer";
import { OrgItem } from "../../components/OrgItem";
export const Orgs = ({ route }) => {
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
      <UserInformationContainer title={"Orgs"}>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
        <OrgItem></OrgItem>
      </UserInformationContainer>
      <Footer location={user.location} />
    </View>
  );
};
