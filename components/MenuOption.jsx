import { Pressable, Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const MenuOption = ({
  icon,
  title,
  subtitle,
  border = true,
  onPress,
}) => {
  return (
    <Pressable
      style={border ? [styles.button, styles.buttonBorder] : styles.button}
      onPress={onPress}
    >
      <View
        style={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "rgba(220,220,220, 0.4)",
          padding: 7,
          marginRight: 16,
        }}
      >
        {icon}
      </View>
      <View style={{ width: "72%" }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
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
