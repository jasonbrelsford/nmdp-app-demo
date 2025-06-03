import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Google from 'expo-auth-session/providers/google';

export default function LoginScreen({ navigation }) {
  const [location, setLocation] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required for this app.');
        return;
      }
    })();
  }, []);

  const handleLogin = async () => {
    try {
      const result = await promptAsync();
      if (result.type === 'success') {
        navigation.replace('Feed');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NMDP Donor App</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4285F4',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});