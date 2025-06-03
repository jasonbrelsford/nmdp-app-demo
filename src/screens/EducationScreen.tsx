import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function EducationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Understanding Bone Marrow Donation</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What is Bone Marrow?</Text>
          <Text style={styles.text}>
            Bone marrow is the soft, spongy tissue inside your bones that produces blood cells. 
            It contains stem cells that can develop into red blood cells, white blood cells, and platelets.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why is Donation Important?</Text>
          <Text style={styles.text}>
            Bone marrow transplants can be life-saving treatments for people with blood cancers, 
            immune system disorders, and other serious conditions. Your donation could be the cure 
            someone is waiting for.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The Donation Process</Text>
          <Text style={styles.text}>
            There are two ways to donate: bone marrow donation and peripheral blood stem cell (PBSC) donation. 
            Most donations are done through PBSC, which is similar to giving blood. The donation process is 
            safe and typically takes 4-6 hours.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
});