import type { ReactNativePersistence } from 'firebase/auth';

declare module 'firebase/auth' {
  /**
   * Persist Firebase Auth state to React Native AsyncStorage
   */
  export function getReactNativePersistence(
    storage: any
  ): ReactNativePersistence;
}