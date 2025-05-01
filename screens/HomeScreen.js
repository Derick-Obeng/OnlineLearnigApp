import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profilePicPlaceholder}></View>
          <View>
            <Text style={styles.greeting}>Hi, Kristin</Text>
            <Text style={styles.subtext}>Let's start learning</Text>
          </View>
        </View>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Learned today</Text>
        <Text style={styles.progressTime}>46min / 60min</Text>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFill}></View>
        </View>
      </View>

      {/* What to learn card */}
      <TouchableOpacity style={styles.startCard}>
        <View style={styles.illustrationPlaceholder}></View>
        <Text style={styles.cardTitle}>What do you want to learn today?</Text>
        <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>

      {/* Learning Plan */}
      <View style={styles.learningPlan}>
        <Text style={styles.sectionTitle}>Learning Plan</Text>
        <View style={styles.planItemCard}>
          <Text style={styles.planText}>📦 Packaging Design</Text>
          <Text style={styles.planProgress}>40 / 48</Text>
        </View>
        <View style={styles.planItemCard}>
          <Text style={styles.planText}>🎨 Product Design</Text>
          <Text style={styles.planProgress}>6 / 24</Text>
        </View>
      </View>

      {/* Meetup Card */}
      <View style={styles.meetupCard}>
        <View style={styles.illustrationPlaceholderSmall}></View>
        <Text style={styles.meetupTitle}>Meetup</Text>
        <Text style={styles.meetupSubtitle}>Offline exchange of learning experience</Text>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity><Text style={styles.navItem}>🏠 Home</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>📚 Course</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>🔍 Search</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>💬 Message</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navItem}>👤 Account</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },

  // Header
  header: { marginBottom: 20 },
  profileSection: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  profilePicPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
  },
  greeting: { fontSize: 26, fontWeight: 'bold', color: '#1e1e1e' },
  subtext: { fontSize: 15, color: '#888' },

  // Progress
  progressContainer: { marginTop: 10 },
  progressLabel: { fontSize: 14, color: '#666' },
  progressTime: { fontSize: 14, marginBottom: 5 },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '76%',
    height: '100%',
    backgroundColor: '#4c6ef5',
  },

  // Shared Card Styling
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Start Learning Card
  startCard: {
    backgroundColor: '#e0f0ff',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  illustrationPlaceholder: {
    width: 120,
    height: 80,
    backgroundColor: '#cce0ff',
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 16, fontWeight: '600', marginBottom: 8, textAlign: 'center' },
  getStarted: { color: '#007bff', fontWeight: 'bold' },

  // Learning Plan
  learningPlan: { marginVertical: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  planItemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  planText: { fontSize: 14 },
  planProgress: { fontSize: 14, fontWeight: 'bold', color: '#333' },

  // Meetup card
  meetupCard: {
    backgroundColor: '#f9e0ff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  illustrationPlaceholderSmall: {
    width: 100,
    height: 60,
    backgroundColor: '#e9caff',
    borderRadius: 10,
    marginBottom: 10,
  },
  meetupTitle: { fontSize: 16, fontWeight: '600' },
  meetupSubtitle: { fontSize: 13, color: '#555', textAlign: 'center' },

  // Bottom Navigation
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    marginTop: 20,
    paddingBottom: 10,
  },
  navItem: { fontSize: 13, color: '#666' },
});
