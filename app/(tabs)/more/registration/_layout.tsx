import { Stack } from "expo-router";

export default function RegistrationLayout() {
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
        name="hkphl"
        options={{
          title: "HKPHL Registration",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="tournament"
        options={{
          title: "Tournament Registration",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
