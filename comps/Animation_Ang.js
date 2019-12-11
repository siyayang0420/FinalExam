import React, {useState} from 'react';
import {View, Text, Animated, Button} from 'react-native';

export default function Animation_Ang() {
        // const [op_value] = useState(new Animated.Value(1)); 
        const [bg_color] = useState(new Animated.Value(1));  
        
        var my_bg = bg_color.interpolate({
            inputRange: [0,1],
            outputRange: ["blue", "red"]
        })

        return (
            <Animated.View style={{backgroundColor:my_bg}}>
                <Text>This view is gonna get animated!</Text>
                <Button onPress={()=>{
                    Animated.timing(
                        bg_color,
                        {
                            toValue:0,
                            duration:500
                            // delay:1000
                        }
                    ).start();
                }} title="Go Invisible!" />
            </Animated.View>
        )
    }