import React from 'react';

import {Welcome} from './src/pages/Welcome'
import {UserIndentification} from './src/pages/UserIndentification'
import AppLoader from 'expo-app-loading'
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'


export default function App() {

  const [ fontsLoader ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  })

  if(!fontsLoader){
    return <AppLoader />
  }

  return (
    <UserIndentification /> 
  );
}


