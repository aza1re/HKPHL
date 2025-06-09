import React from 'react'
import 'react-native-gesture-handler'
import { View, Button, ScrollView, Text } from 'react-native'


type Section = {
  heading: string;
  buttons: { label: string; screen: string }[];
};

const sections: Section[] = [
  {
    heading: 'Tournaments',
    buttons: [
      { label: 'Tournament 1', screen: 'Tournament1' },
      { label: 'Tournament 2', screen: 'Tournament2' },
    ],
  },
  {
    heading: 'League Schedule',
    buttons: [
      { label: 'View Schedule', screen: 'LeagueSchedule' },
    ],
  },
  {
    heading: 'Summer Camps',
    buttons: [
      { label: 'Camp Info', screen: 'SummerCamps' },
    ],
  },
  {
    heading: 'History',
    buttons: [
      { label: 'View History', screen: 'History' },
    ],
  },
  {
    heading: 'Team Registration',
    buttons: [
      { label: 'Register Team', screen: 'TeamRegistration' },
    ],
  },
];

type JapanScreenProps = {
  navigation: any;
};

export default function JapanScreen({ navigation }: JapanScreenProps) {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {sections.map(section => (
        <View key={section.heading} style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            {section.heading}
          </Text>
          {section.buttons.map(btn => (
            <View key={btn.label} style={{ marginVertical: 4 }}>
              <Button
                title={btn.label}
                onPress={() => navigation.navigate(btn.screen)}
              />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
