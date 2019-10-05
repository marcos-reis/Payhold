import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Partners({ partner }) {
  return (
    <View style={styles.areaDestaque}>
      <Text>{partner} </Text>
      <Image style={styles.logoParceiros} />
      <Image style={styles.logoParceiros} />
    </View>
  );
}
const styles = StyleSheet.create({
  areaDestaque: {
    flexDirection: 'row',
  },
});
