import { View, Image } from "react-native";
import { UserPrifile } from "../../components/UserProfile";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { UserInformationContainer } from "../../components/UserInformationContainer";
import { Footer } from "../../components/Footer";
import { Item } from "../../components/Item";
import { useEffect } from "react";
export const Friends = ({ route }) => {
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
      <UserInformationContainer title={"Seguidores"}>
        {user.friends.map((item, i) => {
          return (
            <View key={i}>
              <Item
                title={item.name}
                padding={false}
                icon={
                  <Image
                    style={{ width: 36, height: 36, borderRadius: 10 }}
                    source={{ uri: item.photo }}
                  ></Image>
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
