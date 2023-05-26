import { View } from "react-native";
import { UserPrifile } from "../../components/UserProfile";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { UserInformationContainer } from "../../components/UserInformationContainer";
import { Footer } from "../../components/Footer";
import { Item } from "../../components/Item";
import { useEffect } from "react";
export const Repositories = ({ route }) => {
  const { user } = route.params;
  useEffect(() => {
    console.log("user", user);
  }, []);
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
      <UserInformationContainer title={"Repositórios"}>
        {user.repositories.map((item, i) => {
          return (
            <View key={i}>
              <Item
                title={item.title}
                description={item.private ? "Private" : "Public"}
                url={item.url}
                icon={
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    size={24}
                    color="black"
                  />
                }
              ></Item>
            </View>
          );
        })}
      </UserInformationContainer>
      <Footer location={user.location} />
    </View>
  );
};
