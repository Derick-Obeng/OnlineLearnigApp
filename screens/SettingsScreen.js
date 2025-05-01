import React from "react";
import { View, Text, StyleSheet, Switch, SafeAreaView } from "react-native";
import { useTheme } from "../ThemeContext";

const Settings = () => {
  const { isDarkMode, setIsDarkMode, colors } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View style={styles.switchContainer}>
        <Text style={[styles.text, { color: colors.text }]}>Dark mode</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    padding: 30,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
});
// This code defines a Settings screen in a React Native application. It uses the ThemeContext to manage dark mode settings. The screen contains a switch that allows users to toggle between dark and light modes. The styles are applied conditionally based on the current theme, ensuring that the text and background colors are appropriate for the selected mode.
