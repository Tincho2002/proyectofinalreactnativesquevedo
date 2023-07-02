import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { useSelector } from "react-redux";

import { COLORS } from "../../constants";
import CartNavigator from "../cart";
import OrdersNavigator from "../orders";
import ShopNavigator from "../shop";
import StartNavigator from "../start";
import TicketNavigator from "../tkt";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  const cart = useSelector((state) => state.cart.data);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const tabIconAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    tabIconAnimation();
  }, [tabIconAnimation]);
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "Inter-Regular",
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.text,
        tabBarInactiveTintColor: COLORS.darkGray,
        tabBarIconStyle: {
          fontSize: 22,
        },
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ focused, color, size }) => (
            <Animated.View style={{ opacity: animatedValue }}>
              <Ionicons
                name={focused ? "paw" : "paw-outline"}
                size={size}
                color={color}
              />
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Luck"
        component={StartNavigator}
        options={{
          tabBarLabel: "Luck",
          tabBarIcon: ({ focused, color, size }) => (
            <Animated.View style={{ opacity: animatedValue }}>
              <Ionicons
                name={focused ? "gift" : "ios-logo-octocat"}
                size={size}
                color={color}
              />
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Tkt"
        component={TicketNavigator}
        options={{
          tabBarLabel: "Ticket",
          tabBarIcon: ({ focused, color, size }) => (
            <Animated.View style={{ opacity: animatedValue }}>
              <Ionicons
                name={focused ? "receipt-sharp" : "receipt-outline"}
                size={size}
                color={color}
              />
            </Animated.View>
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "documents" : "folder-open-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
          tabBarBadge: cart.length,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.brightRed,
            color: COLORS.white,
            fontFamily: "Inter-Bold",
            fontSize: 11,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
