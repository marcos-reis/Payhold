import React, { useState } from 'react';
import {
  Switch,
  View,
  Image,
  StatusBar,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

import { styles } from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import layout from '../../assets/layout.png';
import logo from '../../assets/logo.png';
import api from '../../services/api';

const [checked, setChecked] = useState(false);
const [useremail, setUserEmail] = useState(null);
const [userpassword, setUserPassword] = useState(null);

export default function Login({ navigation }) {
  const callApi = async () => {
    const response = await api.post('/session', {
      email: useremail,
      password: userpassword,
    });
    console.log(response.data);
  };

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor={'#2B6BC8'}
        barStyle={'light-content'}
      />
      <View style={styles.background}>
        <Image source={layout} />
      </View>
      <View style={styles.content}>
        <Image style={styles.logoImage} source={logo} />
        <Text style={styles.slogan}>Cashback para as suas compras</Text>
        <View style={styles.form}>
          <View>
            <Icon
              style={styles.email}
              name="perm-identity"
              size={30}
              color="#A5A5A5"
            />
            <TextInput
              value={useremail}
              onChangeText={setUserEmail}
              style={styles.inputEmail}
              defaultValue="marcosreisdossantos01@gmail.com"
              autoCapitalize="none"
              returnKeyType="next"
            />
          </View>
          <View>
            <Icon style={styles.lock} name="lock" size={30} color="#A5A5A5" />
            <TextInput
              value={userpassword}
              onChangeText={setUserPassword}
              style={styles.inputPassword}
              defaultValue="marcosreis"
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.rowView}>
            <View style={styles.remember}>
              <Switch
                thumbColor={'#fff'}
                trackColor={{ true: '#48bd6d', false: null }}
                style={styles.switch}
                value={checked}
                onChange={() => setChecked(!checked)}
              />
              <Text style={styles.textRemember}>Lembrar-me</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.textForgot}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => callApi()} style={styles.handleEntry}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.notMember}>
          Não é um membro?
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Text style={styles.textCreate}> Crie sua Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
