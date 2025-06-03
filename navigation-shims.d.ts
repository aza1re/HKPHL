// filepath: c:\Users\User\PP\AchieveHockey\App\hockey-app\navigation-shims.d.ts
import '@react-navigation/native';
import '@react-navigation/bottom-tabs';
import '@react-navigation/native-stack';

declare module '@react-navigation/native' {
  // allow id to be a string
  interface NativeNavigatiorConfig {
    id?: string
  }
}

declare module '@react-navigation/bottom-tabs' {
  // allow id to be a string
  interface BottomTabNavigationConfig {
    id?: string
  }
}

declare module '@react-navigation/native-stack' {
  // allow id to be a string
  interface NativeStackNavigatorConfig {
    id?: string
  }
}