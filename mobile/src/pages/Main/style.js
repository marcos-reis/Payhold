import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
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
  margin-top: ${width * 0.55};
`;
export const Slogan = styled.Text`
  font-size: 18;
  color: #fff;
`;
export const InputEmail = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
  margin-top: 80;
`;
export const InputPassword = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
  margin-top: 20;
`;

export const RowView = styled.View`
  flex-direction: row;
`;

export const Remember = styled.TouchableOpacity``;
export const TextRemember = styled.Text`
  color: #fff;
  font-size: 15;
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
