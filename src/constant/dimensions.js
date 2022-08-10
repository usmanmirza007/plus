import {Dimensions, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const WINDOW_HEIGHT = Dimensions.get('window').height;
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('screen').height;
export const SCREEN_WIDTH = Dimensions.get('screen').width;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : getStatusBarHeight(true);
export const BOTTOM_NAVBAR_HEIGHT =
  SCREEN_HEIGHT - WINDOW_HEIGHT + STATUS_BAR_HEIGHT;
