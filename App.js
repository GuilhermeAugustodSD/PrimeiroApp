import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Routes/Routes';



export default function App () {
  const [fonteCarregada] = useFonts({
    "MonstserratRegular": Montserrat_400Regular,
    "MonstserrartBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <AppLoading/>
  }
  return (
       
      <NavigationContainer>
        <Routes/>
        <StatusBar translucent={true} />
      </NavigationContainer>
  );
}