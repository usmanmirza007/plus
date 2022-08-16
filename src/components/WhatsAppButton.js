import { StyleSheet } from 'react-native'
import React from 'react'
import { Button } from './Button'
import { openWhatsApp } from '../helpers'
import { images, colors } from '../constant';
import commonStyle from '../constant/commonStyle';

export const WhatsAppButton = () => {
  return (
    <Button
      style={{ width: 45, height: 45, position: 'absolute', bottom: 10, right: 10, padding: -5, backgroundColor: colors.white , ...commonStyle.shadow, borderRadius: 10}}
      leftIcon={images.whatsappLogo}
      leftIconStyle={{ width: 50, height: 50, resizeMode: 'contain', tintColor: colors.green}}
      onPress={openWhatsApp}
    />
  )
}

const styles = StyleSheet.create({})