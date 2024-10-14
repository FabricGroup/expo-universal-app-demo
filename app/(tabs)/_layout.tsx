import {
  CircleDollarSign,
  MapPin,
  Wallet
} from "@tamagui/lucide-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(accounts)"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color }) => <Wallet color={color} />,
        }}
      />
      <Tabs.Screen
        name="pay"
        options={{
          title: "Pay",
          tabBarIcon: ({ color }) => (
            <CircleDollarSign color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="atm-finder"
        options={{
          title: "ATM Finder",
          tabBarIcon: ({ color }) => <MapPin color={color} />,
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
