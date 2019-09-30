import styled from 'styled-components/native';
import { Dimensions, Platform, StatusBar } from 'react-native';
const { width } = Dimensions.get('window');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
export const Statusbar = styled.StatusBar``;

export const Container = styled.View``;
export const Containerbg = styled.View`
  position: absolute;
`;
export const Context = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Background = styled.Image``;

export const Logo = styled.Image`
  margin-top: ${STATUSBAR_HEIGHT + width * 0.2};
`;
export const Slogan = styled.Text`
  font-size: 18;
  color: #fff;
`;
export const Form = styled.View``;
export const InputEmail = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
  margin-top: 60;
  padding: 0px 5px;
`;
export const InputPassword = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
  margin-top: 20;
  padding: 0px 5px;
`;

export const RowView = styled.View`
  flex-direction: row;
  margin-top: 20;
`;

export const Remember = styled.TouchableOpacity`
  flex-direction: row;
`;
export const TextRemember = styled.Text`
  color: #fff;
  font-size: 15;
  margin-left: 10;
`;

export const Forgot = styled.TouchableOpacity``;
export const TextForgot = styled.Text`
  color: #fff;
  font-size: 15;
  margin-left: 50;
`;
export const HandleEntry = styled.TouchableOpacity`
  background-color: #fff;
  width: ${width * 0.25};
  height: 40;
  margin-top: 50;
  justify-content: center;
  align-items: center;
  border-radius: 10;
`;
export const TextEntry = styled.Text`
  color: #5c82ba;
  font-weight: bold;
  font-size: 20;
`;
export const NotMember = styled.Text`
  font-size: 15;

  margin-top: 70;
`;
export const CreateAccount = styled.TouchableOpacity``;
export const TextCreate = styled.Text`
  font-weight: bold;
  font-size: 15;
  color: #5c82ba;
`;
