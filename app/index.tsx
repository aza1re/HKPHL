import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 24 }}>
        Welcome to HKPHL!
      </Text>
      <Button
        title="Enter App"
        onPress={() => router.push("/(tabs)/Tournaments")}
      />
    </View>
  );
}