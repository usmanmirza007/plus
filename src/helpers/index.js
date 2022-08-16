import { Linking } from 'react-native'

export const openWhatsApp = () => {
  Linking.openURL('https://wa.me/+923441489958');
}