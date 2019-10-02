import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { styles } from './style';

import logo from '../../assets/logo.png';

export default function Create({ navigation }) {
  const [confirmed, setConfirmed] = useState(false);
  const [message, setMessage] = useState('');
  const [useremail, setUserEmail] = useState('');
  const [username, setUserName] = useState('');
  const [usercpf, setUserCPF] = useState('');
  const [userpass, setUserPass] = useState('');

  const callApi = async () => {
    const response = await api.post('/user/store', {
      fullname: username,
      email: useremail,
      cpf: usercpf,
      password: userpass,
    });
    const { message: messageapi } = response.data[0] || response.data;

    console.log(userpass, response.data);
    messageapi ? setMessage(messageapi) : setMessage(null);
    setConfirmed(!confirmed);
    setTimeout(() => setConfirmed(false), 3000);
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
      <Text style={styles.slogan}>Cashback para suas compras</Text>
      <View>
        <Text style={styles.labelName}>Nome</Text>
        <TextInput
          style={styles.inputName}
          onChangeText={setUserName}
          value={username}
        />
        <Text style={styles.LabelMail}>Email</Text>
        <TextInput
          onChangeText={setUserEmail}
          value={useremail}
          style={styles.inputMail}
        />
        <Text style={styles.LabelCPF}>CPF</Text>
        <TextInput
          style={styles.inputCPF}
          onChangeText={setUserCPF}
          value={usercpf}
        />
        <Text style={styles.LabelPassword}>Password</Text>
        <TextInput
          style={styles.inputPassword}
          value={userpass}
          onChangeText={setUserPass}
        />
      </View>

      <TouchableOpacity style={styles.buttonCreate} onPress={() => callApi()}>
        <Text style={styles.textCreate}>Confirma</Text>
      </TouchableOpacity>

      {confirmed && (
        <View style={styles.bgConfirmed}>
          <View style={styles.boxConfirmed}>
            <Text style={styles.textConfirmed}>
              {message ? message : 'Dados Cadastrados com sucesso'}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}
