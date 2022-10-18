import { DeviceEventEmitter, Platform } from 'react-native';

let listenerKeyDown: any;

export function onKeyDownListener(cb: any) {
  removeKeyDownListener();
  if (Platform.OS !== 'ios') {
    listenerKeyDown = DeviceEventEmitter.addListener('onKeyDown', cb);
  }
}

export function removeKeyDownListener() {
  if (listenerKeyDown) {
    listenerKeyDown.remove();
    listenerKeyDown = null;
  }
}
