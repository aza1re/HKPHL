import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
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
