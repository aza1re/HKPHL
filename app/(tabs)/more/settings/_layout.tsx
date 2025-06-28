import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#D62828",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="notifications"
        options={{
          title: "Notifications",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="personal-data"
        options={{
          title: "Personal Data",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="preferences"
        options={{
          title: "Preferences",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
