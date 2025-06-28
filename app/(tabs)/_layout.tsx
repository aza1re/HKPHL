import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts, BakbakOne_400Regular } from "@expo-google-fonts/bakbak-one";

export default function TabLayout() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    BakbakOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D62828", // Red color for active tab
        tabBarInactiveTintColor: "#8E8E93",
        // Global header styling applied to all tabs
        headerTintColor: "#231716", // Text color for all headers
        headerStyle: {
          backgroundColor: "#D62828", // Red header background
        },
        headerTitleStyle: {
          fontSize: 30,
          color: "#fff", // White text on red background
          fontFamily: "BakbakOne_400Regular",
        },
        headerTitleAlign: "left",
        headerStatusBarHeight: 2,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e7",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="tournaments"
        options={{
          title: "Tourneys",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-hockey" size={size + 3} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="education"
        options={{
          title: "Education",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="backpack" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leagues"
        options={{
          title: "Leagues",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="trophy-variant"
              size={size}
              color={color}
            />
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
