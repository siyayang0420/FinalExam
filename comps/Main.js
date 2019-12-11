import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Animation_Ang from './Animation_Ang';
import Animation_N from './Animation_N';
import Animation_S from './Animation_S'

function Main(){
    return(
        <View>
            <ScrollView style={{height:'100%'}}>
            <Animation_N/>
            <Animation_Ang/>
            <Animation_S/>
            </ScrollView>
        </View>
    )
}

export default Main;