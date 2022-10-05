import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Button, ScrollView, Image} from 'react-native'
import axios from 'axios';
import {Video, AVPlaybackStatus} from 'expo-av'

const endpoint = "https://api.nasa.gov/planetary/apod?api_key=JbPskfAcVPpxN602YevCVKqXG7dh7VZ7Yb8qkM2j";


export default function PhotoOfTheDayScreen({navigation}){

    const [nasaData, setNasaData] = useState([]);

    const getData = () => {
        axios.get(endpoint).then(res => setNasaData(res.data) ).catch(err => console.log(err));
    }
    
    const data = () => {
        console.log(nasaData)
    }

    let video;


    let image = <Image source={nasaData.url} />

    let content;

    if(nasaData.length < 0){
        content = <Text>No Data</Text>
    } else {
        content = <View >
                    <Text className="text-white text-base">Date: {nasaData.date}</Text>
                    <Text> {nasaData.explanation}</Text>
                    <Video source={{uri: nasaData.url}}/>
                  </View>
    }

    return(
        <SafeAreaView className="bg-cyan-900">
            <ScrollView className=" h-full px-4">
                <View>
                    <Text>
                        Photo Of The Day Screen
                    </Text>
                    <Text>
                    {content}
                    </Text>
                    <Button onPress={getData} title="Fetch Photo Of The Day"/>
                    <Button onPress={data} title="Log Data" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}