import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ScreenHome() {
  return (
    <ScrollView 
      contentContainerStyle={{ 
        paddingBottom: 80,
        backgroundColor: '#000',
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Шапка профиля */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.userContainer}>
          <Ionicons name="person-circle-outline" size={28} color="#fff" />
          <Text style={styles.userName}>Charlotte</Text>
          <Ionicons name="chevron-forward" size={16} color="#aaa" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="qr-code-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Быстрые действия */}
      <View style={styles.quickActions}>
        {([
          { icon: 'airplane-outline', label: 'Travel' },
          { icon: 'car-outline', label: 'Delivery' },
          { icon: 'gift-outline', label: 'Bonuses' },
          { icon: 'help-circle-outline', label: 'Support' },
        ] as const).map((item, index) => (
          <TouchableOpacity key={index} style={styles.actionItem}>
            <Ionicons name={item.icon} size={24} color="#FF8C00" />
            <Text style={styles.actionLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Карточки счетов */}
      <View style={styles.accountsContainer}>
        <ImageBackground
          source={require('../assets/images/debit-card-bg.png')}
          style={styles.accountCard}
          resizeMode="cover"
        >
          <Ionicons name="card" size={24} color="#fff" />
        </ImageBackground>

        <ImageBackground
          source={require('../assets/images/virtual-card-bg.png')}
          style={styles.accountCard}
          resizeMode="cover"
        >
          <Ionicons name="card" size={24} color="#fff" />
        </ImageBackground>

        <TouchableOpacity style={styles.addCard}>
          <Ionicons name="add" size={32} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Расходы */}
      <View style={styles.expensesSection}>
        <View style={styles.expensesHeader}>
          <Text style={styles.expensesTitle}>
            Expenses in <Text style={{ color: '#FF8C00' }}>June</Text>
          </Text>
          <Text style={styles.expensesTotal}>$5,091</Text>
        </View>
        <View style={styles.progressBar}>
          <ImageBackground
            source={require('../assets/images/progress-texture.png')}
            style={[styles.progressFill, { width: '100%' }]}
            resizeMode="stretch"
          />
        </View>
      </View>

      {/* Транзакции */}
      <View style={styles.transactionsSection}>
        <Text style={styles.sectionTitle}>Today</Text>

        {[{
          name: 'Matthew Billson',
          desc: 'Money Transfer',
          amount: '$56.19',
          date: 'Jun 9, 12:08',
          avatar: require('../assets/images/Matthew Billson.png'),
        }].map((tx, i) => (
          <View key={i} style={styles.transactionItem}>
            <Image source={tx.avatar} style={styles.avatar} />
            <View style={styles.txDetails}>
              <Text style={styles.txName}>{tx.name}</Text>
              <Text style={styles.txDesc}>{tx.desc}</Text>
            </View>
            <View style={styles.txAmountDate}>
              <Text style={styles.txAmount}>{tx.amount}</Text>
              <Text style={styles.txDate}>{tx.date}</Text>
            </View>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Yesterday</Text>

        {[{
          name: 'Starbucks',
          desc: 'Food',
          amount: '$122.47',
          date: 'Jun 8, 19:21',
          icon: require('../assets/images/Starbucks.png'),
        },{
          name: 'Netflix',
          desc: 'Entertainment',
          amount: '$13.17',
          date: 'Jun 8, 08:53',
          icon: require('../assets/images/Netflix.png'),
        }].map((tx, i) => (
          <View key={i} style={styles.transactionItem}>
            <Image source={tx.icon} style={styles.icon} />
            <View style={styles.txDetails}>
              <Text style={styles.txName}>{tx.name}</Text>
              <Text style={styles.txDesc}>{tx.desc}</Text>
            </View>
            <View style={styles.txAmountDate}>
              <Text style={styles.txAmount}>{tx.amount}</Text>
              <Text style={styles.txDate}>{tx.date}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {  
    backgroundColor: '#000', 
  },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 12 
  },
  userContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  userName: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#fff', 
    marginLeft: 8 
  },
  quickActions: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    paddingVertical: 16 
  },
  actionItem: { 
    alignItems: 'center' 
  },
  actionLabel: { 
    marginTop: 4, 
    fontSize: 12, 
    color: '#fff' 
  },
  accountsContainer: { 
    flexDirection: 'row', 
    paddingHorizontal: 16, 
    gap: 8, 
    marginBottom: 16 
  },
  accountCard: { 
    flex: 1, 
    padding: 16, 
    borderRadius: 12, 
    justifyContent: 'space-between', 
    overflow: 'hidden' 
  },
  addCard: { 
    width: 60, 
    height: 100, 
    borderRadius: 12, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  expensesSection: { 
    paddingHorizontal: 16, 
    marginBottom: 16 
  },
  expensesHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  expensesTitle: { 
    fontSize: 24, 
    fontWeight: '600', 
    color: '#fff' 
  },
  expensesTotal: {
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  progressBar: { 
    height: 6, 
    backgroundColor: '#333', 
    borderRadius: 3, 
    overflow: 'hidden', 
    marginTop: 8 
  },
  progressFill: { 
    height: '100%', 
    backgroundColor: '#FF8C00' 
  },
  transactionsSection: { 
    paddingHorizontal: 16, 
    marginBottom: 16 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#fff', 
    marginBottom: 8 
  },
  transactionItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 12, 
    borderBottomWidth: 1, 
    borderBottomColor: '#333', 
    backgroundColor: '#111', 
    borderRadius: 10, 
    paddingHorizontal: 10, 
    marginBottom: 8 
  },
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginRight: 12 
  },
  icon: { 
    width: 32, 
    height: 32, 
    marginRight: 12 
  },
  txDetails: { 
    flex: 1 
  },
  txName: { 
    fontSize: 16, 
    color: '#fff', 
    fontWeight: '500' 
  },
  txDesc: { 
    fontSize: 14, 
    color: '#aaa' 
  },
  txAmountDate: { 
    alignItems: 'flex-end' 
  },
  txAmount: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#fff' 
  },
  txDate: { 
    fontSize: 12, 
    color: '#888' 
  },
});
