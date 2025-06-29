import { Stack } from "expo-router";

export default function MoreLayout() {
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
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="registration"
        options={{
          headerShown: false,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="ai-chatbot"
        options={{
          title: "AI Chatbot",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
