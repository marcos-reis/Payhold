import React from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '70%',
    backgroundColor: '#2b6bc8',
    borderBottomRightRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 263,
    height: 78,
    fontSize: 60,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    textAlign: 'center',
  },
  slogan: {
    width: 274,
    height: 23,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
    textAlign: 'center',
  },
  email: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    marginTop: 100,
    borderRadius: 10,
  },
  password: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
  },
  forgot: {
    color: '#fff',
    marginTop: 10,
    marginLeft: 170,
    fontSize: 15,
  },
  notmember: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    marginTop: 80,
  },
  account: {
    color: '#2b6bc8',
  },
});

// import { Container } from './styles';

const Login = () => (
  <View style={styles.container}>
    <ImageBackground style={styles.background}>
      <Text style={styles.logo}>Payhold</Text>
      <Text style={styles.slogan}>Cashback para suas compras online</Text>
      <TextInput style={styles.email} />
      <TextInput style={styles.password} />
      <Text style={styles.forgot}>Esqueçeu a senha ?</Text>
    </ImageBackground>
    <Text style={styles.notmember}>
      Não é um membro?
      <Text style={styles.account}> Crie sua Conta</Text>
    </Text>
  </View>
);

export default Login;
