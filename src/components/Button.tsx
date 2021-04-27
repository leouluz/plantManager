import React from 'react'
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title: String,
}

import colors from '../styles/colors'

export function Button({title, ...rest} : ButtonProps){
  return (
    <TouchableOpacity 
    style={styles.button}
    activeOpacity={0.7}
    {...rest}
  >
    <Text style={styles.textButton}>
      {title}
    </Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: colors.green,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height:56,
    paddingHorizontal:10
  },
  textButton:{
    color:colors.white,
    fontSize: 24
  }
})