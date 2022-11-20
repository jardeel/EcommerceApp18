import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_900Black,
  Poppins_900Black_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_100Thin,
  Poppins_100Thin_Italic
} from '@expo-google-fonts/poppins';

import { Welcome, Walkthrough, AuthMain } from './src/screens';
import TextButton from './src/components/TextButton';

const Stack = createStackNavigator();

export default App = () => {

  let [fontsLoaded] = useFonts({
    Poppins_900Black,
    Poppins_900Black_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_100Thin,
    Poppins_100Thin_Italic
  });

  if(!fontsLoaded){
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={'Welcome'}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="AuthMain" component={AuthMain} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
