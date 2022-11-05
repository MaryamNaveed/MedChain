import {Platform} from 'react-native';

const HTTP_CLIENT_URL = Platform.select({
  ios: 'localhost',
  android: '10.0.2.2',
});

export {HTTP_CLIENT_URL};