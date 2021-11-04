import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import FilterContainer from "../components/FilterContainer";
import ItemComponent from "../components/ItemComponent";
import Colors from "../theme/colors";
import Images from "../../assets/images";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import i18n from "../helpers/i18n";

const Home = (props) => {
  const insets = useSafeAreaInsets();
  const [side, setSide] = useState("left");

  const DATA = [
    {
      username: "Calum Lewis",
      itemName: `${i18n.t("Home.Pancake")}`,
      profilePicture: require("../../assets/images/CL.png"),
      foodPicture: require("../../assets/images/Pancake.png"),
      itemType: `${i18n.t("Home.Food")}`,
      deliveryTime: 60,
    },
    {
      username: "Eilif Sonas",
      itemName: `${i18n.t("Home.Salad")}`,
      profilePicture: require("../../assets/images/ES1.png"),
      foodPicture: require("../../assets/images/Salad.png"),
      itemType: `${i18n.t("Home.Food")}`,
      deliveryTime: 60,
    },
    {
      username: "Elena Shelby",
      itemName: `${i18n.t("Home.Pancake")}`,
      profilePicture: require("../../assets/images/ES2.png"),
      foodPicture: require("../../assets/images/Pancake2.png"),
      itemType: `${i18n.t("Home.Food")}`,
      deliveryTime: 60,
    },
    {
      username: "John Priyadi",
      itemName: `${i18n.t("Home.Salad")}`,
      profilePicture: require("../../assets/images/JP.png"),
      foodPicture: require("../../assets/images/Salad2.png"),
      itemType: `${i18n.t("Home.Food")}`,
      deliveryTime: 60,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <Images.search />
        </View>
        <Text>{i18n.t("Home.Search")}</Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>{i18n.t("Home.Category")}</Text>
      </View>
      <View style={styles.filterRow}>
        <FilterContainer text={`${i18n.t("Home.All")}`} disabled={false} />
        <FilterContainer text={`${i18n.t("Home.Food")}`} disabled={true} />
        <FilterContainer text={`${i18n.t("Home.Drink")}`} disabled={true} />
      </View>
      <View style={styles.divider} />
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => {
            setSide("left");
          }}
          style={{
            ...styles.tabContainer,
            borderBottomWidth: side === "left" ? 3 : 1,
            borderBottomColor:
              side === "left" ? Colors.primary : Colors.outline,
          }}
        >
          <Text
            style={{
              ...styles.tabText,
              color: side === "left" ? Colors.deepBlue : Colors.outline,
            }}
          >
            {i18n.t("Home.Left")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSide("right");
          }}
          style={{
            ...styles.tabContainer,
            borderBottomWidth: side !== "left" ? 3 : 1,
            borderBottomColor:
              side !== "left" ? Colors.primary : Colors.outline,
          }}
        >
          <Text
            style={{
              ...styles.tabText,
              color: side !== "left" ? Colors.deepBlue : Colors.outline,
            }}
          >
            {i18n.t("Home.Right")}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...styles.list,
          marginBottom: Platform.OS === "ios" ? insets.bottom + 25 : 100,
        }}
      >
        <FlatList
          data={DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemComponent
              username={item.username}
              itemName={item.itemName}
              itemType={item.itemType}
              deliveryTime={item.deliveryTime}
              profilePicture={item.profilePicture}
              foodPicture={item.foodPicture}
              onPress={() => props.navigation.navigate("Details")}
            />
          )}
          columnWrapperStyle={styles.rowStyle}
          keyExtractor={(item, index) => item.username + index}
          numColumns={2}
          ItemSeparatorComponent={() => (
            <View style={{ width: "100%", height: 32 }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    backgroundColor: Colors.form,
    width: "88%",
    height: 56,
    paddingHorizontal: 24,
    borderRadius: 32,
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
  },
  searchIcon: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  searchText: {
    fontWeight: "500",
    fontSize: 15,
    color: Colors.secondaryText,
  },
  categoryContainer: {
    width: "100%",
    height: 27,
    marginTop: 24,
    marginLeft: 24,
  },
  categoryText: {
    color: Colors.deepBlue,
    fontSize: 17,
    lineHeight: 27,
    fontFamily: "bold",
  },
  filterRow: {
    flexDirection: "row",
    marginTop: 16,
    width: "100%",
    height: 48,
    marginBottom: 24,
    marginLeft: 24,
  },
  divider: {
    width: "100%",
    backgroundColor: Colors.form,
    height: 8,
  },
  tabsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 71,
  },
  tabContainer: {
    width: "50%",
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.outline,
  },
  tabText: {
    fontSize: 15,
    fontFamily: "normal",
    lineHeight: 18,
  },
  list: {
    flex: 1,
    paddingHorizontal: 24,
  },
  rowStyle: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Home;
