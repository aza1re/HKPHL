import { Stack } from "expo-router";

export default function TournamentsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Tournament Details",
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
