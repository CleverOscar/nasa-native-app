import 'react-native-gesture-handler'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import HomeScreen from './Views/HomeScreen';
import PhotoOfTheDayScreen from './Views/PodScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(22, 103, 184)'
  }
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Photo Of The Day" component={PhotoOfTheDayScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

