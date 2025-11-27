import React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ScreenHome from './screenHome';
import ScreenConf from './screenConf';
import ScreenWrapper from './ScreenWrapper';

const { width: screenWidth, height: windowHeight } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isMobile = screenWidth < 768;

export default function App() {
  return (
    <SafeAreaView style={[styles.safeArea, isWeb && { maxHeight: windowHeight }]}>
      {isMobile ? (
        <ScreenWrapper>
          <ScreenHome />
        </ScreenWrapper>
      ) : (
        <View style={styles.desktopContainer}>
          <ScreenWrapper>
            <ScreenHome />
          </ScreenWrapper>
          <ScreenWrapper>
            <ScreenConf />
          </ScreenWrapper>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#302e2eff',
  },
  desktopContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    paddingHorizontal: 80, 
    paddingVertical: 20,
    gap: 24,
  },
});