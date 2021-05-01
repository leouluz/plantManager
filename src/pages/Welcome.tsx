import React from 'react'
import { useNavigation } from '@react-navigation/core'
import {
  Text, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  Dimensions,
  TouchableOpacity,
  View
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

export function Welcome () {

  const navigation = useNavigation();

  function handleStart(){
    navigation.navigate('UserIndentification')
  }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <StatusBar />
          <Text style={styles.title}>
              Gerencie {'\n'}
              suas plantas {'\n'}
              de forma fácil
          </Text>
          
          <Image 
            source={wateringImg} 
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.subTitle}> 
            Não esqueça mais de regar suas plantas.
            Nós cuidamos de lembrar você sempre que precisar.
          </Text>

          <TouchableOpacity 
            style={styles.buttonHome}
            activeOpacity={0.7}
          >
              <Feather 
                name="chevron-right" 
                style={styles.buttonIcon}
                onPress={handleStart}
              />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  wrapper:{
    flex:1,
    alignItems:'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title:{
    fontSize:28,
    fontWeight:'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight:34
  },
  subTitle:{
    textAlign:'center',
    fontSize:18,
    paddingHorizontal:20,
    color: colors.heading,
    fontFamily: fonts.text
  },
  image:{
    height: Dimensions.get('window').width * 0.7
  },
  buttonHome:{
    backgroundColor: colors.green,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height:56,
    width:56,
  },
  buttonIcon:{
    fontSize:32,
    color: colors.white
  }
})

