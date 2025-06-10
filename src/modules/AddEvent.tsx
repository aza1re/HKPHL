import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function AddEvent({ navigation, route }: any) {
  const [name, setName] = useState<string>('');

  const handleAdd = () => {
    if (name.trim()) {
      route.params?.onAdd({ name });
      navigation.goBack();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 20, marginBottom: 12 }}>Add Event</Text>
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