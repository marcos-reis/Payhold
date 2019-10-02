import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2b6bc8',
  },
  slogan: {
    fontSize: 20,
    color: '#fff',
  },
  arrowLeft: {
    position: 'absolute',
    top: STATUSBAR_HEIGHT + width * 0.1,
    left: 10,
    width: 40,
  },
  labelName: {
    color: '#fff',
    marginTop: 80,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputName: {
    backgroundColor: '#fff',
    width: width * 0.75,
    height: 40,
    borderRadius: 8,
  },
  LabelMail: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  inputMail: {
    backgroundColor: '#fff',
    width: width * 0.75,
    height: 40,
    borderRadius: 8,
  },
  LabelCPF: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  inputCPF: {
    backgroundColor: '#fff',
    width: width * 0.75,
    height: 40,
    borderRadius: 8,
  },
  LabelPassword: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  inputPassword: {
    backgroundColor: '#fff',
    width: width * 0.75,
    height: 40,
    borderRadius: 8,
  },
  buttonCreate: {
    backgroundColor: '#fff',
    width: width * 0.38,
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textCreate: {
    color: '#2b6bc8',
    fontWeight: 'bold',
    fontSize: 18,
  },
  bgConfirmed: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxConfirmed: {
    backgroundColor: '#fff',
    width: '80%',
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textConfirmed: {
    fontSize: 20,
  },
  buttonClose: {
    backgroundColor: '#d5d5d5',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 8,
  },
  textClose: {
    fontSize: 16,
  },
});
