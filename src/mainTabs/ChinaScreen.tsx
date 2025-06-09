import React, { useLayoutEffect, useState } from 'react'
import 'react-native-gesture-handler'
import { View, Button, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// Map section headings to logo images
const logoMap: Record<string, any> = {
  'Tournaments': require('../../assets/favicon.png'),
  'Leagues': require('../../assets/favicon.png'),
  'Showcases': require('../../assets/favicon.png'),
  'Camps': require('../../assets/favicon.png'),
  // Add more if needed
};

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

type ChinaScreenProps = {
  navigation: any;
};

export default function ChinaScreen({ navigation }: ChinaScreenProps) {
  const [sections, setSections] = useState(initialSections);
  const [isAdmin, setIsAdmin] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        isAdmin ? (
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
        ) : (
          <TouchableOpacity
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate('Login', { setIsAdmin })}
          >
            <Ionicons name="log-in-outline" size={28} color="black" />
          </TouchableOpacity>
        ),
    });
  }, [navigation, isAdmin]);

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {sections.map(section => (
        <View key={section.heading} style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>
            {section.heading}
          </Text>
          {section.buttons.map(btn => (
            <View
              key={btn.label}
              style={{
                marginVertical: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              {/* Only show logo for main event types */}
              {logoMap[section.heading] && (
                <Image
                  source={logoMap[section.heading]}
                  style={{ width: 32, height: 32, marginRight: 12 }}
                  resizeMode="contain"
                />
              )}
              <View style={{ flex: 1 }}>
                <Button
                  title={btn.label}
                  onPress={() => navigation.navigate(btn.screen)}
                />
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
