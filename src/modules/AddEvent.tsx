import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const eventTypes = ['Tournaments', 'Leagues', 'Showcases'];

export default function AddEvent({ navigation, route }: any) {
  const [type, setType] = useState<string>(eventTypes[0]);
  const [name, setName] = useState<string>('');

  const handleAdd = () => {
    if (name.trim()) {
      route.params?.onAdd({ type, name });
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Add Event</Text>
      <Text>Type:</Text>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue: string) => setType(itemValue)}
        style={{ marginBottom: 12 }}
      >
        {eventTypes.map(t => (
          <Picker.Item key={t} label={t} value={t} />
        ))}
      </Picker>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Event Name"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 6 }}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}