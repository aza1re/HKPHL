import { Stack } from "expo-router";

export default function RegistrationLayout() {
  return (
    <Stack>
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
