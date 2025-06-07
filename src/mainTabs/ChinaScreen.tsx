import React from 'react'
import 'react-native-gesture-handler'
import { View, Button, ScrollView } from 'react-native'


const screens = [
  'Tournaments',
  'Summer Camps',
  'History',
  'Favourites',
  'League Schedule',
  'Stats',
  'Players',
] as const;

type ChinaScreenProps = {
  navigation: any;
  route: { name: typeof screens[number] };
};

export default function ChinaScreen({ navigation, route }: ChinaScreenProps) {
  return (
    <ScrollView contentContainerClassName="p-6 items-center justify-center">
      {screens.map(screen => (
        <View className="my-2 w-4/5" key={screen}>
          {route.name !== screen && (
            <Button
              title={screen}
              onPress={() => navigation.navigate(screen)}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
}

