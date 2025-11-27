import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavItem = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

const navItems: NavItem[] = [
  { icon: 'home', label: 'Home' },
  { icon: 'swap-vertical-outline', label: 'Payments' },
  { icon: 'time-outline', label: 'History' },
  { icon: 'pie-chart-outline', label: 'Analytics' },
  { icon: 'chatbubbles-outline', label: 'Chats' },
];

interface BottomNavBarProps {
  activeIndex?: number;
  onPress?: (index: number) => void;
}

export default function BottomNavBar({ activeIndex = 0, onPress }: BottomNavBarProps) {

  return (
    <View style={styles.container}>
      {navItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navItem}
          onPress={() => onPress?.(index)}
        >
          <Ionicons
            name={item.icon}
            size={24}
            color={activeIndex === index ? '#FF8C00' : '#888'}
          />
          <Text style={[styles.label, activeIndex === index && styles.labelActive]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    borderTopWidth: 1,
    borderTopColor: '#333',
    paddingVertical: 12,
    width: 425
  },
  navItem: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
  labelActive: {
    color: '#FF8C00',
  },
});
