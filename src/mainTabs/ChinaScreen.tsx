import React, { useLayoutEffect, useState } from 'react'
import 'react-native-gesture-handler'
import { View, Button, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons'


const initialSections = [
  {
    heading: 'Tournaments',
    buttons: [
      { label: 'Tournament 1', screen: 'Tournament1' },
      { label: 'Tournament 2', screen: 'Tournament2' },
    ],
  },
  {
    heading: 'Leagues',
    buttons: [
      { label: 'League 1', screen: 'League1' },
      { label: 'League 2', screen: 'League2' },
    ],
  },
  {
    heading: 'Showcases',
    buttons: [
      { label: 'Showcase 1', screen: 'Showcase1' },
      { label: 'Showcase 2', screen: 'Showcase2' },
    ],
  },
  {
    heading: 'Camps',
    buttons: [
      { label: 'Camp 1', screen: 'Camp1' },
      { label: 'Camp 2', screen: 'Camp2' },
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
  const [sections, setSections] = useState(initialSections);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 16 }}
          onPress={() =>
            navigation.navigate('AddEvent', {
              onAdd: ({ type, name }) => {
                setSections(prev =>
                  prev.map(section =>
                    section.heading === type
                      ? {
                          ...section,
                          buttons: [
                            ...section.buttons,
                            { label: name, screen: name.replace(/\s+/g, '') },
                          ],
                        }
                      : section
                  )
                );
              },
            })
          }
        >
          <Ionicons name="add-circle-outline" size={28} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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
