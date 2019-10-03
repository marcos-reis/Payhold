import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { styles } from './style';

import logo from '../../assets/logo.png';

export default function Create({ navigation }) {
  const [confirmed, setConfirmed] = useState(false);
  const [message, setMessage] = useState('');
  const [useremail, setUserEmail] = useState('marcos@payhold.com');
  const [username, setUserName] = useState('Marcos Reis');
  const [usercpf, setUserCPF] = useState('06646456450');
  const [userpass, setUserPass] = useState('123456');
  const callApi = async () => {
    try {
      const response = await api.post(
        '/user/store',
        {
          fullname: username,
          email: useremail,
          cpf: usercpf,
          password: userpass,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const { message: messageapi } = response.data[0] || response.data;
      messageapi ? setMessage(messageapi) : setMessage(null);
      setConfirmed(!confirmed);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'#2B6BC8'}
        barStyle={'light-content'}
      />
      <Icon
        style={styles.arrowLeft}
        name="keyboard-backspace"
        size={60}
        color="#fff"
        onPress={() => navigation.navigate('Login')}
      />
      <Image source={logo} />
      <Text style={styles.slogan}>Cashback para suas compras online</Text>
      <View>
        <Text style={styles.labelName}>Nome</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={setUserName}
          value={username}
          returnKeyType="next"
        />
        <Text style={styles.LabelMail}>Email</Text>
        <TextInput
          onChangeText={setUserEmail}
          value={useremail}
          style={styles.inputMail}
          autoCapitalize="none"
          returnKeyType="next"
        />
        <Text style={styles.LabelCPF}>CPF</Text>
        <TextInput
          style={styles.inputCPF}
          onChangeText={setUserCPF}
          value={usercpf}
          returnKeyType="next"
        />
        <Text style={styles.LabelPassword}>Password</Text>
        <TextInput
          style={styles.inputPassword}
          value={userpass}
          onChangeText={setUserPass}
          autoCapitalize="none"
          returnKeyType="done"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.buttonCreate} onPress={() => callApi()}>
        <Text style={styles.textCreate}>Confirma</Text>
      </TouchableOpacity>

      {confirmed &&
        Alert.alert(
          message ? 'Sorry' : 'Show',
          message ? message : 'Cadastro concluido',
          [
            {
              text: 'ok',
              onPress: () => {
                setConfirmed(!confirmed);
                message ? null : navigation.navigate('Login');
              },
            },
          ]
        )}
    </View>
  );
}
