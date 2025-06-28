import { Stack } from "expo-router";

export default function TeamsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          title: "Team Details",
          headerBackTitle: "Back",
          headerStyle: {
            backgroundColor: "#D62828",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
    </Stack>
  );
}
