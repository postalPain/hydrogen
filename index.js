import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';


if (__DEV__) {
  const DEV_XHR = GLOBAL.originalXMLHttpRequest
    ? GLOBAL.originalXMLHttpRequest
    : GLOBAL.XMLHttpRequest;
  // eslint-disable-next-line
  const DEV_WS = GLOBAL.WebSocket = GLOBAL.originalWebSocket || GLOBAL.WebSocket;

  // eslint-disable-next-line
  XMLHttpRequest = DEV_XHR;
  WebSocket = DEV_WS;
}

AppRegistry.registerComponent(appName, () => App);
