import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { AdminProvider } from './context/AdminContext';

export default function App() {
  return (
    <AdminProvider>
      <AppNavigator />
    </AdminProvider>
  );
}