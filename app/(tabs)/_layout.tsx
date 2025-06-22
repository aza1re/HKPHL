import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function TabLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D62828", // Red color for active tab
        tabBarInactiveTintColor: "#8E8E93",
        // Global header styling applied to all tabs
        headerStyle: {
          backgroundColor: "#D62828", // Red background for all headers
        },
        headerTintColor: "#fff", // White text color for all headers
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "left",
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e7",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="tournaments"
        options={{
          title: "Tournaments",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="golf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          title: "Camps",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leagues"
        options={{
          title: "Leagues",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("/more/settings" as any)}
            >
              <Ionicons
                name="settings-outline"
                size={24}
                color="#fff"
                style={{ marginRight: 15 }}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
