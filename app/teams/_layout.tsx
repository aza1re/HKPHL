import { Stack } from "expo-router";

export default function TeamsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "Team Details",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
