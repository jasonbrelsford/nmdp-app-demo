import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

export function useFrameworkReady() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
}