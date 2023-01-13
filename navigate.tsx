import React from "react";
import { HomeScreen, Dictionary, Test } from "./src/screens";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
// import { BlurView } from 'expo-blur';

import { gStyle } from "./styles/style";

const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            color = "#2a324b";
            size = 32;

            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Test":
                iconName = focused ? "ios-list" : "ios-list-outline";
                break;
              case "Dictionary":
                iconName = focused ? "book" : "book-outline";
                break;
              default:
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: gStyle.tabBar,
          tabBarActiveTintColor: "#2a324b",
          // tabBarInactiveTintColor:
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: gStyle.header,
            headerTitleStyle: gStyle.headerTitle,
            // tabBarAccessibilityLabel: {}
            // tabBarLabel: {}
          }}
        />
        <Tab.Screen
          name="Dictionary"
          component={Dictionary}
          options={{
            title: "Dictionary",
            // tabBarLabel: 'Dictionary',
            headerStyle: gStyle.header,
            headerTitleStyle: gStyle.headerTitle,
          }}
        />
        <Tab.Screen
          name="Test"
          component={Test}
          options={{
            title: "Test",
            headerStyle: gStyle.header,
            headerTitleStyle: gStyle.headerTitle,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
