import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import Home from "../screens/Home";
import DetailRecipe from "../screens/DetailRecipe";
import colors from "../theme/colors";
import Images from "../../assets/images";
import i18n from "../helpers/i18n";

export const navigationRef = React.createRef();

const navigate = (name, params) => {
  navigationRef.current?.navigate(name, params);
};

const reset = () => {
  navigationRef.current?.reset();
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Main = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={AppTab} />
    <Stack.Screen name="Details" component={DetailRecipe} />
  </Stack.Navigator>
);
let x = 0;
const langs = ["en", "fr", "yb", "ig"];
const languageChange = () => {
  x = x + 1;

  i18n.locale = langs[x];
};

const CustomTabBarButton = ({ children, onPress, focused }) => (
  <TouchableOpacity
    style={{
      top: -21,
      alignItems: "center",
      justifyContent: "flex-start",
    }}
    onPress={onPress && languageChange() && reset()}
  >
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 56,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
      {children}
    </View>
    <Text
      style={{
        marginTop: Platform.OS === "ios" ? 8 : 21,
        color: focused ? colors.primary : colors.secondaryText,
        fontSize: 11,
        fontWeight: "500",
      }}
    >
      {i18n.t("TabBar.Scan")}
    </Text>
  </TouchableOpacity>
);

const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          height: 95,
        },
      }}
    >
      <Tab.Screen
        name={"HomeTab"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.iconContainer}>
                <Images.home
                  width={24}
                  height={24}
                  fill={focused ? colors.primary : colors.secondaryText}
                />
                <Text
                  style={{
                    marginTop: 10,
                    color: focused ? colors.primary : colors.secondaryText,
                    fontSize: 11,
                    fontWeight: "500",
                  }}
                >
                  {i18n.t("TabBar.Home")}
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={"Upload"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Images.upload
                width={24}
                height={24}
                fill={focused ? colors.primary : colors.secondaryText}
              />
              <Text
                style={{
                  marginTop: 10,
                  color: focused ? colors.primary : colors.secondaryText,
                  fontSize: 11,
                  fontWeight: "500",
                }}
              >
                {i18n.t("TabBar.Upload")}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Scan"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Images.scan width={24} height={24} fill={colors.white} />
            </View>
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={"Notification"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Images.notification
                width={24}
                height={24}
                fill={focused ? colors.primary : colors.secondaryText}
              />
              <Text
                style={{
                  marginTop: 10,
                  color: focused ? colors.primary : colors.secondaryText,
                  fontSize: 11,
                  fontWeight: "500",
                }}
              >
                {i18n.t("TabBar.Notification")}
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Images.profile
                width={24}
                height={24}
                fill={focused ? colors.primary : colors.secondaryText}
              />
              <Text
                style={{
                  marginTop: 10,
                  color: focused ? colors.primary : colors.secondaryText,
                  fontSize: 11,
                  fontWeight: "500",
                }}
              >
                {i18n.t("TabBar.Profile")}
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 68,
    height: 47,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
