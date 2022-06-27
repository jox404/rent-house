import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
/* Fonts */
import { useFonts } from 'expo-font';
/* Icons */
import {Ionicons} from '@expo/vector-icons/'


export default function App() {

  let [loader] = useFonts({
    ontserratItalic: require('./src/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
    Montserrat: require('./src/assets/fonts/static/Montserrat-Light.ttf'),
    MontserratBold: require('./src/assets/fonts/static/Montserrat-Bold.ttf'),
    MontserratSemiBold: require('./src/assets/fonts/static/Montserrat-SemiBold.ttf'),
    MontserratLight: require('./src/assets/fonts/static/Montserrat-ExtraLight.ttf'),
  })

  if(!loader){
    return null
  }

  return (
  <>
  <StatusBar style='light' backgroundColor='#000' translucent={false}/>
      <Routes/>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});