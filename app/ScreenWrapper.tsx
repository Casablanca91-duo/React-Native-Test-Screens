import React, { useState, ReactNode } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import HeaderStatus from './HeaderStatus';
import BottomNavBar from './BottomNavBar';

const { height: screenHeight } = Dimensions.get('window');

interface ScreenWrapperProps {
  children: ReactNode;
}

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      <HeaderStatus />
      <View style={styles.content}>
        <View style={styles.screenContent}>
          {children}
        </View>
      </View>
      <BottomNavBar activeIndex={activeTab} onPress={setActiveTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 450,
    flex: 1,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    shadowColor: '#302e2eff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    marginLeft: 300,
    marginRight: 300,
  },
  content: {
    flex: 1,

  },
  screenContent: {
    height: 800,
  },
});