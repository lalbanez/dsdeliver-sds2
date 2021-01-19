import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/header';
import Home from './src/Home';

export default function App() {
  let [fontsLoad] = useFonts({
    OpenSans_400Regular, OpenSans_700Bold
  });
  if (!fontsLoad){
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Home />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'OpenSans_700Bold'
  },
});
