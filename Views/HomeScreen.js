import React from 'react';

import {View, Text} from 'react-native';


export default function HomeScreen(){
    return(
        <View className="flex flex-col h-full justify-evenly ">
            <View className=" h-1/4">
                <Text className="text-white text-center text-3xl my-auto">
                Nasa Native App
            </Text>
            </View>

           <View className=" h-3/4">
             <Text className="text-white text-center text-3xl my-auto bg-gray-900/50" >
                Welcome to the React Native version of our, a application that fetches data from NASA 's Portal API database
            </Text>
           </View>
        </View>
    )
}

