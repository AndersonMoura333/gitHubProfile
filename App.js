import { Image, StyleSheet, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { MenuOption } from "./components/MenuOption";
export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "#000",
              position: "absolute",
              top: 160,
              right: 0,
              zIndex: 10,
              borderRadius: 16,
              padding: 16,
            }}
          >
            <FontAwesome name="search" size={36} color="white" />
          </View>
          <Image
            style={{ width: 190, height: 190, borderRadius: 70, marginTop: 40 }}
            source={{
              uri: "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",
            }}
          ></Image>
        </View>
        <Text
          style={{
            fontSize: 34,
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Name
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "grey",
          }}
        >
          @nickName
        </Text>
      </View>
      <View style={styles.menu}>
        <MenuOption
          title={"Bio"}
          subtitle={"Um pouco sobre o usuário"}
          icon={<Ionicons name="person-outline" size={24} color="black" />}
        ></MenuOption>
        <MenuOption
          title={"Orgs"}
          subtitle={"Organizações que o usuário faz parte"}
          icon={<FontAwesome5 name="headset" size={24} color="black" />}
        ></MenuOption>
        <MenuOption
          title={"Repositórios"}
          subtitle={"Lista contendo todos os repositórios"}
          icon={
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color="black"
            />
          }
        ></MenuOption>
        <MenuOption
          title={"Seguidores"}
          subtitle={"Lista de seguidores"}
          icon={
            <MaterialCommunityIcons
              name="face-recognition"
              size={24}
              color="black"
            />
          }
          border={false}
        ></MenuOption>
      </View>
      <View style={styles.resetMainView}>
        <View style={styles.resetInternView}>
          <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
          <Text
            style={{
              fontSize: 20,
              color: "#727272",
              marginLeft: 10,
            }}
          >
            Resetar
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fc",
    flex: 1,
  },
  menu: { flex: 3, backgroundColor: "#fff", margin: 20, borderRadius: 20 },
  resetMainView: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopStartRadius: 35,
    borderTopEndRadius: 35,
    marginHorizontal: 14,
  },
  resetInternView: {
    flexDirection: "row",
    margin: 20,
    backgroundColor: "#ffff",
    height: "74%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
  },
});
