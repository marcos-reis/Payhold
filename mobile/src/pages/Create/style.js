import styled from 'styled-components/native';
import { Dimensions, Platform, StatusBar } from 'react-native';
const { width } = Dimensions.get('window');

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const Statusbar = styled.StatusBar``;
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2b6bc8;
`;
export const Logo = styled.Image``;
export const Slogan = styled.Text`
  font-size: 20;
  color: #fff;
`;
export const Form = styled.View``;
export const LabelName = styled.Text`
  color: #fff;
  margin-top: 80;
  font-weight: bold;
  margin-bottom: 5;
`;
export const InputName = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
`;
export const LabelMail = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 5;
`;
export const InputMail = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
`;
export const LabelCPF = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 5;
`;
export const InputCPF = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
`;

export const LabelPassword = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 5;
`;
export const InputPassword = styled.TextInput`
  background-color: #fff;
  width: ${width * 0.75};
  height: 40;
  border-radius: 8;
`;

export const ButtonCreate = styled.TouchableOpacity`
  background-color: #fff;
  width: ${width * 0.38};
  height: 40;
  margin-top: 40;
  justify-content: center;
  align-items: center;
  border-radius: 8;
`;
export const TextCreate = styled.Text`
  color: #2b6bc8;
  font-weight: bold;
  font-size: 18;
`;
