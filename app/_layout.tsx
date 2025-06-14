// app/_layout.tsx
import { Tabs } from "expo-router";
import { AdminProvider } from "../src/context/AdminContext";

export default function Layout() {
  return (
    <AdminProvider>
      <Tabs>
        <Tabs.Screen name="Tournaments" />
        <Tabs.Screen name="Leagues" />
        <Tabs.Screen name="Showcases" />
        <Tabs.Screen name="Favorites" />
        <Tabs.Screen name="More"/>
      </Tabs>
    </AdminProvider>
  );
}