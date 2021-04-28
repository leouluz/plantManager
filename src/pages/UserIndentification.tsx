
import React from 'react'
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView
} from 'react-native'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

import {Button} from '../components/Button'

export function UserIndentification(){
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Text style={styles.emoji}>😄</Text>
            <Text
              style={styles.title}
            >
              Como podemos {'\n'}
              chamar você?
            </Text>

          </View>
          <TextInput 
            style={styles.input}
            placeholder={'Digite um nome'}
          />
          <View
            style={styles.footer}
          >
          <Button title={'continue'} />
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    alignItems:'center',
    justifyContent:'space-around',
  },
  content:{
    flex:1,
    width:'100%'
  },
  form:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:52,
    alignItems:'center',
  },
  emoji:{
    fontSize:44
  },
  input:{
    borderBottomWidth:1,
    borderColor: colors.gray,
    color: colors.heading,
    width:'100%',
    fontSize:18,
    marginTop:50,
    padding:10,
    textAlign:'center'
  },
  title:{
    fontSize:24,
    lineHeight: 32,
    textAlign:'center',
    color:colors.heading,
    fontFamily: fonts.heading,
    marginTop:20
  },
  footer:{
    marginTop:40,
    width: '100%',
    paddingHorizontal: 20
  },
  header:{
    alignItems: 'center'
  }
})