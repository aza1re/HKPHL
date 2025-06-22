// app/_layout.tsx
import { Tabs } from "expo-router";
import { AdminProvider } from "../../context/AdminContext";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function Layout() {
  return (
    <AdminProvider>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Tournaments"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="trophy" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Leagues"
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-group" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Showcases"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Favorites"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="More"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ellipsis-horizontal" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </AdminProvider>
  );
}