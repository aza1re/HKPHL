import React from 'react'
import 'react-native-gesture-handler'
import { View, Button, ScrollView, StyleSheet } from 'react-native'


const screens = [
  'Notifications',
  'Need Help',
  'Contact Us',
] as const;

type MoreScreenProps = {
  navigation: any;
  route: { name: typeof screens[number] };
};

export default function MoreScreen({ navigation, route }: MoreScreenProps) {
  return (
    <ScrollView className="flex-1 items-center justify-center p-6">
      <View className="my-2 w-4/5">
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      {screens.map(screen => (
        <View style={styles.buttonWrapper} key={screen}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  buttonWrapper: {
    marginVertical: 8,
    width: '80%',
  },
});

