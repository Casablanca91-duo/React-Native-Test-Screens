import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';



export default function ScreenConf() {
  return (
    <ScrollView
      contentContainerStyle={{ 
        paddingBottom: 80,
        backgroundColor: '#000', 
        paddingHorizontal: 16,
        flexGrow: 1, 
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Шапка */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons name="mail" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Контент */}
      <View style={styles.scrollContent}>
        {/* Фильтры */}
        <View style={styles.filterTabs}>
          {[
            { label: 'All', active: true },
            { label: 'Payments', active: false },
            { label: 'System', active: false },
            { label: 'Delivery', active: false },
            { label: 'Travel', active: false },
          ].map((tab, index) => (
            <TouchableOpacity key={index} style={styles.filterTab}>
              <Text
                style={[
                  styles.filterLabel,
                  tab.active && styles.filterActive,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Уведомления */}
        <View style={styles.notificationsSection}>
          <Text style={styles.sectionTitle}>TODAY, 17 JUNE</Text>
          <View style={styles.notificationItem}>
            <Image source={require('../assets/images/Anna.png')} style={styles.avatar} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Received from Anna</Text>
              <Text style={styles.notificationAmount}>+$110</Text>
              <Text style={styles.notificationDetails}>Debit ••• 4385</Text>
              <Text style={styles.notificationDate}>17 June 2025, 17:49 - Payments</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>YESTERDAY, 16 JUNE</Text>
          <View style={styles.notificationItem}>
            <Ionicons name="heart-outline" size={24} color="#FF6B00" style={styles.icon} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>See our limited offer!</Text>
              <Text style={styles.notificationDesc}>Would you like to visit new countries? Maybe it's your time!</Text>
              <Text style={styles.notificationDate}>16 June 2025, 23:08 - Travel</Text>
            </View>
          </View>

          <View style={styles.notificationItem}>
            <Ionicons name="arrow-up-circle-outline" size={24} color="#FF6B00" style={styles.icon} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Sent to •• 2041</Text>
              <Text style={styles.notificationAmount}>-$14.62</Text>
              <Text style={styles.notificationDetails}>Debit ••• 4385</Text>
              <Text style={styles.notificationDate}>16 June 2025, 06:18 - Payments</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>24 MARCH, 2025</Text>
          <View style={styles.notificationItem}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#FF6B00" style={styles.icon} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>New login into account</Text>
              <Text style={styles.notificationDesc}>You have logged in from a new location: iOS 26.0.1 · 109.255.84.7 · Spain</Text>
              <Text style={styles.notificationDate}>24 March 2025, 15:44 - Security</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  filterTabs: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 16,
  },
  filterTab: {
    marginRight: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: '#aaa',
  },
  filterActive: {
    color: '#FF8C00',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    marginTop: 24,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  notificationsSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  icon: {
    marginRight: 12,
    marginTop: 4,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 4,
  },
  notificationAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B00',
    marginBottom: 4,
  },
  notificationDetails: {
    fontSize: 14,
    color: '#aaa',
    marginBottom: 4,
  },
  notificationDesc: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
  },
  notificationDate: {
    fontSize: 12,
    color: '#888',
  },
});