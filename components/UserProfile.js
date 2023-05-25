import { View, Image, Text, StyleSheet } from "react-native";
export const UserPrifile = ({ user }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 5,
      }}
    >
      <View>
        <Image
          style={styles.userImage}
          source={{
            uri: user.photo,
          }}
        ></Image>
      </View>
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userNickname}>{`@${user.nickname}`}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          width: "56%",
          marginTop: 10,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>
          Seguidores: {JSON.stringify(user.followers)}
        </Text>

        <Text style={{ fontWeight: "bold" }}>
          Seguindo: {JSON.stringify(user.following)}
        </Text>
      </View>
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
