import { Stack } from "expo-router";

export default function MoreLayout() {
  return (
    <Stack>
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
      <Stack.Screen
        name="about-us"
        options={{
          title: "About Us",
          headerBackTitle: "Back",
        }}
      />
      <Stack.Screen
        name="annual-report"
        options={{
          title: "Annual Report",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}
