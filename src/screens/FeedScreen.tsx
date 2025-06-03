import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import VideoCard from '../components/VideoCard';

const DUMMY_VIDEOS = [
  {
    id: '1',
    title: 'Understanding Bone Marrow Donation',
    url: 'https://example.com/video1',
    educational: true,
  },
  {
    id: '2',
    title: 'My Donor Story',
    url: 'https://example.com/video2',
    educational: false,
  },
];

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_VIDEOS}
        renderItem={({ item }) => <VideoCard video={item} />}
        keyExtractor={item => item.id}
        snapToInterval={Dimensions.get('window').height}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});