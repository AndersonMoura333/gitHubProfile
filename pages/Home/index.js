import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import { MenuOption } from "../../components/MenuOption";
import { useState } from "react";

export default function Home({ navigation }) {
  const [nickname, setNickname] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    nickname: "",
    photo: "",
    followers: "",
    following: "",
    bio: "",
    location: "",
    publicRepos: "",
    orgs: [],
    repositories: [],
    friends: [],
  });
  const [hasUser, setHasUser] = useState(false);
  const [userNotExist, setUserNotExist] = useState(false);

  const handlerSearchUser = async () => {
    let orgs = [];
    let repositories = [];
    let friends = [];
    await fetch(`https://api.github.com/users/${nickname}/orgs`)
      .then((data) => data.json())
      .then((json) => {
        if (!json.message) {
          json.map((item) =>
            orgs.push({
              title: item.login,
              description: item.description,
            })
          );
        } else {
          setUserNotExist(true);
        }
      });
    await fetch(`https://api.github.com/users/${nickname}/repos`)
      .then((data) => data.json())
      .then((json) => {
        if (!json.message) {
          json.map((item) => {
            repositories.push({
              title: item.name,
              private: item.private,
            });
          });
        }
      });
    await fetch(`https://api.github.com/users/${nickname}/followers`)
      .then((data) => data.json())
      .then((json) => {
        if (!json.message) {
          json.map((item) => {
            friends.push({
              name: item.login,
              photo: item.avatar_url,
            });
          });
        }
      });
    await fetch(`https://api.github.com/users/${nickname}`)
      .then((data) => data.json())
      .then((json) => {
        console.log("json", json);
        if (!json.message) {
          setUser({
            name: json.name,
            nickname: json.login,
            photo: json.avatar_url,
            followers: json.followers,
            following: json.following,
            bio: json.bio,
            location: json.location,
            publicRepos: json.public_repos,
            orgs: orgs,
            repositories: repositories,
            friends: friends,
          });
          setShowModal(false);
          setHasUser(true);
        }
      });
  };

  const handlerMenuOption = (pageName) => {
    navigation.navigate(pageName, { user: user });
  };
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
          <Pressable
            style={styles.searchContainer}
            onPress={() => {
              setShowModal(true);
            }}
          >
            <FontAwesome name="search" size={36} color="white" />
          </Pressable>
          <Image
            style={styles.userImage}
            source={{
              uri: user.photo
                ? user.photo
                : "https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg",
            }}
          ></Image>
        </View>
        <Text style={styles.userName}>{user.name ? user.name : "Name"}</Text>
        <Text style={styles.userNickname}>
          {user.nickname ? `@${user.nickname}` : "@nickname"}
        </Text>
      </View>
      <View style={styles.menu}>
        <MenuOption
          title={"Bio"}
          subtitle={"Um pouco sobre o usuário"}
          icon={<Ionicons name="person-outline" size={24} color="black" />}
          onPress={() => {
            if (hasUser) handlerMenuOption("Bio");
          }}
        ></MenuOption>
        <MenuOption
          title={"Orgs"}
          subtitle={"Organizações que o usuário faz parte"}
          icon={<FontAwesome5 name="headset" size={24} color="black" />}
          onPress={() => {
            if (hasUser) handlerMenuOption("Orgs");
          }}
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
          onPress={() => {
            if (hasUser) handlerMenuOption("Repositórios");
          }}
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
          onPress={() => {
            if (hasUser) handlerMenuOption("Seguidores");
          }}
          border={false}
        ></MenuOption>
      </View>
      <View style={styles.resetMainView}>
        <Pressable
          onPress={() => {
            setUser({
              name: "",
              nickname: "",
              photo: "",
              followers: "",
              following: "",
              bio: "",
              location: "",
              publicRepos: "",
              orgs: [],
              repositories: [],
              friends: [],
            });
          }}
          style={styles.resetInternView}
        >
          <MaterialCommunityIcons name="exit-to-app" size={24} color="black" />
          <Text style={styles.resetText}>Resetar</Text>
        </Pressable>
      </View>
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalMainView}>
            <Text style={{ textAlign: "left", width: "90%", marginBottom: 10 }}>
              Digite seu nickname do gitHub:
            </Text>
            <View style={styles.modalInputView}>
              <TextInput
                onChangeText={setNickname}
                value={nickname}
                style={styles.modalInput}
              ></TextInput>
              <Pressable
                style={styles.modalSearchIcon}
                onPress={handlerSearchUser}
              >
                <FontAwesome name="search" size={36} color="black" />
              </Pressable>
            </View>
            {userNotExist ? (
              <Text style={{ marginTop: 6, color: "red" }}>
                nickname Invalido
              </Text>
            ) : (
              <></>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f8fc",
    flex: 1,
    justifyContent: "center",
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

  searchContainer: {
    backgroundColor: "#000",
    position: "absolute",
    top: 160,
    right: 0,
    zIndex: 10,
    borderRadius: 16,
    padding: 16,
  },
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

  resetText: {
    fontSize: 20,
    color: "#727272",
    marginLeft: 10,
  },

  modalContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  modalMainView: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    width: "80%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "grey",
  },

  modalInputView: {
    height: "40%",
    width: "90%",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
  },

  modalInput: {
    paddingLeft: 12,
    fontSize: 20,
    width: "80%",
  },
  modalSearchIcon: { position: "absolute", right: 0, paddingRight: 10 },
});
