import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Images from "../../assets/images";
import colors from "../theme/colors";
import { BlurView } from "expo-blur";
import i18n from "../helpers/i18n";


const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const ItemComponent = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.bio}>
        <Image
          source={props.profilePicture}
          resizeMode={"contain"}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{props.username}</Text>
      </View>
      <View style={styles.itemImageContainer}>
        <BlurView intensity={80} style={styles.blurredHeart} />
        <View style={styles.heart}>
          <Images.heart width={20} height={20} />
        </View>
        <Image
          source={props.foodPicture}
          style={styles.foodPicture}
          resizeMode={"contain"}
        />
      </View>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.itemName}</Text>
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemDetailsText}>{props.itemType}</Text>
        <View style={styles.circle} />
        <Text style={styles.itemDetailsText}>
          {`>`}
          {props.deliveryTime} {i18n.t("Home.mins")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    minHeight: height * 0.33,
    justifyContent: "center",
    borderRadius: 32,
  },
  bio: {
    width: "100%",
    height: 31,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 31,
    height: 31,
    borderRadius: 11,
    marginRight: 8,
  },
  username: {
    fontWeight: "500",
    fontSize: 12,
    color: colors.mainText,
  },
  itemImageContainer: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "column",
  },
  blurredHeart: {
    zIndex: 9999,
    position: "absolute",
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    opacity: 0.2,
    overflow: "hidden",
  },
  heart: {
    zIndex: 10000,
    position: "absolute",
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  foodPicture: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 16,
    marginBottom: 16,
  },
  itemTitleContainer: {
    width: "100%",
    height: 27,
    justifyContent: "center",
    marginBottom: 8,
  },
  itemTitle: {
    fontFamily: "bold",
    fontSize: 17,
    lineHeight: 27,
    color: colors.deepBlue,
  },
  itemDetailsContainer: {
    flexDirection: "row",
    width: "100%",
    height: 15,
    alignItems: "center",
  },
  itemDetailsText: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    color: colors.secondaryText,
  },
  circle: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: colors.secondaryText,
    marginHorizontal: 8,
    alignSelf: "center",
  },
});

export default ItemComponent;
