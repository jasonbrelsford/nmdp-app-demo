import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MatchProbabilityScreen() {
  const [matchPercentage, setMatchPercentage] = useState(1);

  const requestTypingKit = () => {
    // Implementation for requesting typing kit
    Alert.alert('Success', 'Your free typing kit has been requested!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.percentage}>{matchPercentage}%</Text>
      <Text style={styles.label}>Match Probability</Text>
      
      <TouchableOpacity style={styles.button} onPress={requestTypingKit}>
        <Text style={styles.buttonText}>Improve Your Match Possibility</Text>
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
  percentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4285F4',
  },
  label: {
    fontSize: 18,
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