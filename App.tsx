import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AdminProvider } from './src/context/AdminContext';

export default function App() {
  return (
    <AdminProvider>
      <AppNavigator />
    </AdminProvider>
  );
}