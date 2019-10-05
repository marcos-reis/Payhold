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
  ScrollView,
} from 'react-native';

import Partners from '../../components/Partners';

import layout from '../../assets/layout2.png';
import logo from '../../assets/logo.png';
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
      <View style={styles.custonBar}>
        <Image source={layout} style={styles.background} />
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => navigation.navigate('Login')}
        >
          <Image source={logo} style={styles.logoImage} />
          <Text style={styles.slogan}>Cashack para suas compras online</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.areaParceiros}>
            <Text style={styles.destaque}>Destaques</Text>
            <Partners partner="amazon" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  custonBar: {
    zIndex: 1,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    fontWeight: 'bold',
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
  swap: {
    fontSize: 25,
    color: 'gray',
    left: 93,
    top: -20,
  },
});
