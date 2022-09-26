import { StyleSheet, Text, View, SafeAreaView, ImageBackground, StatusBar, Dimensions } from 'react-native';

import HomeScreen from './Views/HomeScreen';

const image = {
  uri: 'https://wallpapercave.com/wp/wp5111092.jpg'
}

var {width} = Dimensions.get('window');

export default function App() {
  return (
    <ImageBackground source={image} resizeMode="cover">
      <StatusBar barStyle='light-content' />
      <SafeAreaView className="h-full mx-2">
        <View>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

