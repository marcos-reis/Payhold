import React from 'react';
import {
  Dimensions,
  StatusBar,
  Platform,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import layout from '../../assets/layout2.png';
import logo from '../../assets/logo.png';
import amazon from '../../assets/amazon.png';
import submarino from '../../assets/submarino.png';
import netshoes from '../../assets/netshoes.png';
// import { Container } from './styles';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const { width } = Dimensions.get('window');
export default function Dashboard({ navigation }) {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor={'#2B6BC8'}
        barStyle={'light-content'}
      />
      <View>
        <Image source={layout} style={styles.background} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={logo} style={styles.logoImage} />
        </TouchableOpacity>
        <Text style={styles.slogan}>Cashack para suas compras online</Text>
        <View style={styles.areaParceiros}>
          <Text style={styles.destaque}>Destaques</Text>
          <View style={styles.areaDestaque}>
            <Image source={netshoes} />
            <Image source={submarino} style={styles.logoParceiros} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
  },
  logoImage: {
    marginTop: STATUSBAR_HEIGHT + width * 0.1,
  },
  slogan: {
    color: '#fff',
  },
  destaque: {
    color: 'gray',
    marginLeft: 50,
  },
  areaParceiros: {
    width: width * 1,
    marginTop: 70,
  },
  areaDestaque: {
    flexDirection: 'row',
    top: -20,
  },
  logoParceiros: {
    left: -35,
  },
});
