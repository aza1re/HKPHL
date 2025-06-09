import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebase'; // <-- Make sure db is exported from your firebase config
import { doc, getDoc } from 'firebase/firestore';

export default function LoginScreen({ navigation, route }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Pass setIsAdmin from route.params (or use context if you prefer)
  const setIsAdmin = route?.params?.setIsAdmin;

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Check Firestore for admin status
      const adminDoc = await getDoc(doc(db, "admins", user.uid));
      if (adminDoc.exists()) {
        setIsAdmin && setIsAdmin(true);
        Alert.alert('Login successful! Admin access granted.');
      } else {
        setIsAdmin && setIsAdmin(false);
        Alert.alert('Login successful! But you are not an admin.');
      }
      navigation.goBack();
    } catch (err) {
      setError('Login failed. Check your credentials.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 6 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 6 }}
      />
      {error ? <Text style={{ color: 'red', marginBottom: 12 }}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}