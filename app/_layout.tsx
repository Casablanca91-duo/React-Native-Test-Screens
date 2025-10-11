import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, Dimensions} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import ScreenHome from './screenHome';
import ScreenConf from './screenConf';
import HeaderStatus from './HeaderStatus';
import BottomNavBar from './BottomNavBar';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
const isMobile = screenWidth < 768;
const { height: windowHeight } = Dimensions.get('window');

export default function App() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'conf'>('home');
  const [activeTab, setActiveTab] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.safeArea, isWeb && { maxHeight: windowHeight }, 
      !isMobile && {
        marginLeft: (screenWidth - 450) / 2, // центрируем по горизонтали
        maxWidth: 450,
        minWidth: 450,
      }
    ]}>
      {/* Верхний переключатель экранов */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.button, activeScreen === 'home' && styles.activeButton]}
          onPress={() => setActiveScreen('home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeScreen === 'conf' && styles.activeButton]}
          onPress={() => setActiveScreen('conf')}
        >
          <Text style={styles.buttonText}>Config</Text>
        </TouchableOpacity>
      </View>

      {/* Статусная панель */}
      <HeaderStatus />
      {/* Скроллируемый контент */}
      {activeScreen === 'home' ? <ScreenHome /> : <ScreenConf />}
      
      {/* Фиксированная нижняя панель */}
      
        <BottomNavBar activeIndex={activeTab} onPress={setActiveTab} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1
  },
    
  topBar: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#111',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  button: {
     marginRight: 12, 
     padding: 8, 
     borderRadius: 6, 
     backgroundColor: '#333' 
  },
  activeButton: { 
    backgroundColor: '#555' 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: '600' },
});


