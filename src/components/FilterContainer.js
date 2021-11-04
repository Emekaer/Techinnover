import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../theme/colors";

const FilterContainer = (props) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: props.disabled ? Colors.form : Colors.primary,
      }}
    >
      <Text
        style={{
          ...styles.text,
          color: props.disabled ? Colors.secondaryText : Colors.white,
          fontWeight: props.disabled ? "500" : "bold",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 68,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    marginRight: 16,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 15,
  },
});

export default FilterContainer;
