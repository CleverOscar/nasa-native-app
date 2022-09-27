import 'react-native-gesture-handler'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar } from 'react-native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Views/HomeScreen';
import PhotoOfTheDayScreen from './Views/PodScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Photo Of The Day" component={PhotoOfTheDayScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

