import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';

import { StyleSheet, Switch } from 'react-native';
import {
  Container,
  Context,
  Background,
  Logo,
  Slogan,
  Containerbg,
  Form,
  ContEmail,
  ContPassword,
  InputEmail,
  InputPassword,
  HandleEntry,
  TextEntry,
  Forgot,
  TextForgot,
  Remember,
  TextRemember,
  RowView,
  Statusbar,
  NotMember,
  TextCreate,
} from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import layout from '../../assets/layout.png';
import logo from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <Statusbar
        translucent
        backgroundColor={'#2B6BC8'}
        barStyle={'light-content'}
      />
      <Containerbg>
        <Background source={layout} />
      </Containerbg>
      <Context>
        <Logo source={logo} />
        <Slogan>Cashback para as suas compras{checked}</Slogan>
        <Form>
          <ContEmail>
            <Icon
              style={styles.email}
              name="perm-identity"
              size={30}
              color="#A5A5A5"
            />
            <InputEmail
              defaultValue="marcosreisdossantos01@gmail.com"
              autoCapitalize="none"
              returnKeyType="next"
            />
          </ContEmail>
          <ContPassword>
            <Icon style={styles.lock} name="lock" size={30} color="#A5A5A5" />
            <InputPassword
              defaultValue="marcosreis"
              autoCapitalize="none"
              returnKeyType="done"
              secureTextEntry={true}
            />
          </ContPassword>
          <RowView>
            <Remember>
              <Switch
                thumbColor={'#fff'}
                trackColor={{ true: '#48bd6d', false: null }}
                style={styles.switch}
                value={checked}
                onChange={() => setChecked(!checked)}
              />
              <TextRemember>Lembrar-me</TextRemember>
            </Remember>
            <Forgot>
              <TextForgot>Esqueceu sua senha?</TextForgot>
            </Forgot>
          </RowView>
        </Form>
        <HandleEntry>
          <TextEntry>Entrar</TextEntry>
        </HandleEntry>
        <NotMember>
          Não é um membro?
          <TextCreate onPress={() => navigation.navigate('Create')}>
            Crie sua Conta
          </TextCreate>
        </NotMember>
      </Context>
    </Container>
  );
}
const styles = StyleSheet.create({
  email: {
    top: 95,
    left: 5,
    zIndex: 1,
    elevation: 1,
  },
  lock: {
    top: 55,
    left: 5,
    zIndex: 1,
    elevation: 1,
  },
  check: {
    width: 20,
    height: 20,
  },
  switch: {
    top: 0,
  },
});
