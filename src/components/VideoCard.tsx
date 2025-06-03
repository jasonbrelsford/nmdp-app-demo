import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface VideoProps {
  video: {
    id: string;
    title: string;
    url: string;
    educational: boolean;
  }
}

export default function VideoCard({ video }: VideoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.type}>
        {video.educational ? 'Educational' : 'Story'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#1a1a1a',
    justifyContent: 'flex-end',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  type: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.8,
  },
});