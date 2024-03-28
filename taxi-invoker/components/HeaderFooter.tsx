// components/HeaderFooter.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Taxi App Header</Text>
    </View>
  );
};

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 Taxi App. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
    
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#333',
  },
});
    