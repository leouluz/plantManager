import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native'

import {Button} from '../components/Button'

import colors from '../styles/colors'

import wateringImg from '../assets/watering.png'

export function Welcome () {

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>
            Gerencie {'\n'}
            suas plantas {'\n'}
            de forma fácil
        </Text>
        
        <Image source={wateringImg} style={styles.image} />

        <Text style={styles.subTitle}> 
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <Button title={'Avançar'} />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  title:{
    fontSize:32,
    fontWeight:'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subTitle:{
    textAlign:'center',
    fontSize:18,
    paddingHorizontal:20,
    color: colors.heading
  },
  image:{
    width: 292,
    height:284,
  },
})
