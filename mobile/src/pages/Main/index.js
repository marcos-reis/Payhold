import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Container,
  Context,
  Background,
  Logo,
  Slogan,
  Containerbg,
  InputEmail,
  InputPassword,
  HandleEntry,
  TextEntry,
  Forgot,
  TextForgot,
  Remember,
  TextRemember,
  RowView,
} from './style';

import Icon from 'react-native-vector-icons/MaterialIcons';

import layout from '../../assets/layout.png';
import logo from '../../assets/logo.png';

const Main = () => (
  <Container>
    <Containerbg>
      <Background source={layout} />
    </Containerbg>
    <Context>
      <Logo source={logo} />
      <Slogan>Cashback para as suas compras</Slogan>
      <InputEmail>
        <Icon name="perm-identity" size={30} color="#A5A5A5" />
      </InputEmail>
      <InputPassword>
        <Icon name="lock" size={30} color="#A5A5A5" />
      </InputPassword>
      <RowView>
        <Remember>
          <TextRemember>Lembrar-me</TextRemember>
        </Remember>
        <Forgot>
          <TextForgot>Esqueceu sua senha?</TextForgot>
        </Forgot>
      </RowView>
      <HandleEntry>
        <TextEntry>Entrar</TextEntry>
      </HandleEntry>
    </Context>
  </Container>
);

export default Main;
