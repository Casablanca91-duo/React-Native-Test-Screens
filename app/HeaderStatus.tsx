import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HeaderStatus() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top, // чтобы не лезло под челку
        },
      ]}
    >
      <View style={styles.inner}>
        <Text style={styles.time}>9:41</Text>

        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={16} color="#fff" />
          <Ionicons name="wifi" size={16} color="#fff" />
          <Ionicons name="battery-full" size={16} color="#fff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  time: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
});
