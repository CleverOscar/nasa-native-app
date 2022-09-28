
import React, { useCallback } from 'react';

import {View, Text, Linking, Alert, Button, ImageBackground, StatusBar, SafeAreaView} from 'react-native';

const portfolio = "https://cleveroscar.dev/";


const OpenURLButton = ({url, children})=> {
    const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if(supported){
            await Linking.openURL(url)
        } else {
            Alert.alert(`Don't know how to pen this URL: ${url}`)
        }


    }, [url]);
    
    return <Button title={children} onPress={handlePress} />
}


const image = {
    uri: 'https://wallpapercave.com/wp/wp5111092.jpg'
  }


export default function HomeScreen({navigation}){
    return(
        
<ImageBackground source={image} resizeMode="cover">
    <StatusBar barStyle='light-content' />
    <SafeAreaView className="h-full">
        <View>
            <View className="flex flex-col h-full justify-around px-6">
                <View className="mt-10 mb-20 rounded-xl bg-gray-900/80 p-2">
                    <Text className="text-white text-center text-3xl">
                        Nasa Native App
                    </Text>
                </View>

                <View className=" rounded-xl bg-gray-900/80 mb-auto">
                    <Text className="text-white text-left p-4 text-3xl my-auto " >
                        Welcome to the React Native version of our, a application that fetches data from NASA 's Portal API database
                    </Text>

                    <Text className="text-white text-center pb-4 text-base">
                        Swipe right to view current features &#x27A1;
                    </Text>
                </View>

                <View className=" bg-gray-900/80 rounded-xl py-2 ">
                    <Text className="text-white text-center text-base ">
                        This App is managed by
                    </Text>
                    <OpenURLButton url={portfolio}>Oscar Ortiz</OpenURLButton>
                </View>
            </View>
        </View>
    </SafeAreaView>
</ImageBackground>
    )
}
