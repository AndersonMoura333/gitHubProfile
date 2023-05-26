import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export const Item = ({ title, description, icon, padding = true }) => {
  return (
    <View style={[styles.button, styles.buttonBorder]}>
      <View
        style={[
          {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "rgba(220,220,220, 0.4)",
            marginRight: 16,
          },
          padding ? { padding: 7 } : {},
        ]}
      >
        {icon}
      </View>
      <View style={{ width: "72%" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 70,
  },
  buttonBorder: {
    borderBottomWidth: 1,
    borderColor: "rgba(220,220,220, 0.4)",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 12,
    color: "grey",
  },
});
