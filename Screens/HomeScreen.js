import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  useColorScheme,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDark ? '#121212' : '#ffffff' }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image source={require('../assets/Avatar.png')} style={styles.avatar} />
          <View>
            <Text style={[styles.greeting, { color: isDark ? '#fff' : '#000' }]}>Hi, Kristin</Text>
            <Text style={[styles.subtext, { color: isDark ? '#ccc' : '#444' }]}>Let's start learning</Text>
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
        <Image source={require('../assets/illustration.png')} style={styles.cardImage} />
        <Text style={styles.cardTitle}>What do you want to learn today?</Text>
        <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>

      {/* Learning Plan */}
      <View style={styles.learningPlan}>
        <Text style={[styles.sectionTitle, { color: isDark ? '#fff' : '#000' }]}>Learning Plan</Text>

        <View style={styles.planItemCard}>
          <Text style={styles.planText}>📦 Packaging Design</Text>
          <Text style={styles.planProgress}>40 / 48</Text>
        </View>

        <TouchableOpacity
          style={styles.planItemCard}
          onPress={() => navigation.navigate('ProductDesign')}
        >
          <Text style={styles.planText}>🎨 Product Design</Text>
          <Text style={styles.planProgress}>6 / 24</Text>
        </TouchableOpacity>
      </View>

      {/* Meetup Card */}
      <View style={styles.meetupCard}>
        <Image source={require('../assets/Group 136.png')} style={styles.meetupImage} />
        <Text style={styles.meetupTitle}>Meetup</Text>
        <Text style={styles.meetupSubtitle}>
          Offline exchange of learning experience
        </Text>
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
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
  },
  subtext: {
    fontSize: 14,
  },
  progressContainer: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
  },
  progressLabel: {
    fontSize: 14,
    color: '#888',
  },
  progressTime: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  progressBarBackground: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#4f46e5',
  },
  startCard: {
    backgroundColor: '#c7d2fe',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    textAlign: 'center',
  },
  getStarted: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  learningPlan: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  planItemCard: {
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  planText: {
    fontSize: 16,
  },
  planProgress: {
    fontSize: 14,
    color: '#6b7280',
  },
  meetupCard: {
    backgroundColor: '#ede9fe',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  meetupImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  meetupTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  meetupSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4b5563',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
  },
  navItem: {
    fontSize: 14,
  },
});
