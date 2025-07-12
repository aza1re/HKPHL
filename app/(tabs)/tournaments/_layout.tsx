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
            backgroundColor: "#D52B1E",
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
