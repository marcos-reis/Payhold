import React from 'react';
import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';
import {
  Container,
  Statusbar,
  Logo,
  Slogan,
  Form,
  InputName,
  LabelName,
  LabelMail,
  InputMail,
  LabelCPF,
  InputCPF,
  LabelPassword,
  InputPassword,
  ButtonCreate,
  TextCreate,
} from './style';
import logo from '../../assets/logo.png';

const { width } = Dimensions.get('window');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
import Icon from 'react-native-vector-icons/MaterialIcons';
const Create = ({ navigation }) => (
  <Container>
    <Statusbar
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
    <Logo source={logo} />
    <Slogan>Cashback para suas compras</Slogan>
    <Form>
      <LabelName>Nome</LabelName>
      <InputName />
      <LabelMail>Email</LabelMail>
      <InputMail />
      <LabelCPF>CPF</LabelCPF>
      <InputCPF />
      <LabelPassword>Password</LabelPassword>
      <InputPassword />
    </Form>
    <ButtonCreate onPress={() => navigation.navigate('Login')}>
      <TextCreate>Confirma</TextCreate>
    </ButtonCreate>
  </Container>
);

const styles = StyleSheet.create({
  arrowLeft: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT + width * 0.1,
    left: 10,
    width: 40,
  },
});
export default Create;
