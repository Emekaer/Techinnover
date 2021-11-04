import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Colors from "../theme/colors";
import Images from "../../assets/images";
import { BlurView } from "expo-blur";
import i18n from "../helpers/i18n";


const { width } = Dimensions.get("screen");

const DetailRecipe = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.blurContainer}
          onPress={() => navigation.goBack()}
        >
          <BlurView intensity={20} style={styles.blur}>
            <Images.backArrow width={24} height={24} />
          </BlurView>
        </TouchableOpacity>
        <Image
          source={require("../../assets/images/Pancake.png")}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.grip} />
        <Text style={styles.itemTitle}>{i18n.t("Detail.Pancakes")}</Text>
        <View style={styles.itemDetailsContainer}>
          <Text style={styles.itemDetailsText}>{i18n.t("Detail.Food")}</Text>
          <View style={styles.circle} />
          <Text style={styles.itemDetailsText}>60 {i18n.t("Detail.mins")}</Text>
        </View>
        <View style={styles.bioAndLikes}>
          <View style={styles.bio}>
            <Image
              source={require("../../assets/images/ES2.png")}
              style={styles.profilePicture}
              resizeMode={"contain"}
            />
            <Text style={styles.bioName}>Elena Shelby</Text>
          </View>
          <View style={{ ...styles.bio, justifyContent: "flex-end" }}>
            <Images.likes width={32} height={32} />
            <Text style={styles.bioName}>273 {i18n.t("Detail.Likes")}</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={{ ...styles.itemTitle, marginTop: 0 }}>{i18n.t("Detail.Description")}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
          {i18n.t("Detail.DescriptionText")}
          </Text>
        </View>
        <View style={styles.divider} />
        <Text style={{ ...styles.itemTitle, marginTop: 0, marginBottom: 16 }}>
        {i18n.t("Detail.Ingredients")}
        </Text>
        <View style={styles.ingredientContainer}>
          <Images.circleCheck width={24} height={24} />
          <Text style={styles.ingredientText}>4 {i18n.t("Detail.Eggs")}</Text>
        </View>
        <View style={styles.ingredientContainer}>
          <Images.circleCheck width={24} height={24} />
          <Text style={styles.ingredientText}>1/2 {i18n.t("Detail.Butter")}</Text>
        </View>
        <View style={styles.ingredientContainer}>
          <Images.circleCheck width={24} height={24} />
          <Text style={styles.ingredientText}>1/2 {i18n.t("Detail.Butter")}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.white,
  },
  imageContainer: {
    width: width,
    height: width,
    position: "absolute",
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  blurContainer: {
    zIndex: 1000,
    position: "absolute",
    left: width * 0.06,
    top: 60,
  },
  blur: {
    flex: 1,
    backgroundColor: Colors.white,
    width: 56,
    height: 56,
    borderRadius: 56,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: "100%",
    minHeight: "62%",
    zIndex: 100000,
    position: "absolute",
    bottom: 0,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: width * 0.06,
  },
  grip: {
    width: 40,
    height: 5,
    borderRadius: 10,
    backgroundColor: Colors.outline,
    alignSelf: "center",
    marginTop: 16,
  },
  itemTitle: {
    marginTop: 23,
    fontSize: 17,
    fontFamily: "bold",
    color: Colors.deepBlue,
  },
  itemDetailsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 25,
    marginTop: 8,
    alignItems: "center",
  },
  itemDetailsText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 25,
    color: Colors.secondaryText,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: Colors.secondaryText,
    marginHorizontal: 8,
    alignSelf: "center",
  },
  bioAndLikes: {
    alignItems: "center",
    justifyContent: "space-between",
    height: 32,
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
  },
  bio: {
    height: "100%",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 32,
    height: 32,
    borderRadius: 32,
  },
  bioName: {
    fontSize: 15,
    marginLeft: 8,
    fontFamily: "bold",
    color: Colors.deepBlue,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.outline,
    marginVertical: 16,
  },
  descriptionContainer: {
    width: "100%",
    marginTop: 8,
  },
  descriptionText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 25,
    color: Colors.secondaryText,
  },
  ingredientContainer: {
    flexDirection: "row",
    height: 25,
    alignItems: "center",
    marginBottom: 16,
  },
  ingredientText: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 25,
    marginLeft: 8,
    color: Colors.mainText,
  },
});

export default DetailRecipe;
