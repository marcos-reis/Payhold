import { StyleSheet, Dimensions, Platform, StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const styles = StyleSheet.create({
  textCreate: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#5c82ba',
  },
  notMember: {
    fontSize: 15,
    marginTop: 70,
  },
  textEntry: {
    color: '#5c82ba',
    fontWeight: 'bold',
    fontSize: 20,
  },
  handleEntry: {
    backgroundColor: '#fff',
    width: width * 0.25,
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textForgot: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 50,
    top: 5,
  },
  textRemember: {
    color: '#fff',
    fontSize: 15,
    marginLeft: 10,
    top: 5,
  },
  remember: {
    flexDirection: 'row',
  },
  rowView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputPassword: {
    backgroundColor: '#fff',
    width: width * 0.75,
    height: 40,
    borderRadius: 8,
    marginTop: 20,
    padding: '0 15 0 40',
    fontSize: 30,
  },
  inputEmail: {
    backgroundColor: '#fff',
    width: width * 0.75,
    height: 40,
    borderRadius: 8,
    marginTop: 60,
    paddingTop: 0,
    paddingRight: 15,
    paddingLeft: 0,
    paddingBottom: 40,
    fontSize: '16px',
  },
  form: {
    alignItems: 'center',
  },
  slogan: {
    fontSize: 18,
    color: '#fff',
  },
  logoImage: {
    marginTop: STATUSBAR_HEIGHT + width * 0.2,
  },
  background: {
    position: 'absolute',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
