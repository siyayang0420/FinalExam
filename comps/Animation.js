import React, {useState, useEffect} from 'react';
import {View, Text, Animated, Button} from 'react-native';



function Animation(){

    const [op] = useState(new Animated.Value(0));
    const [text, setText] = useState("Original Text");
//run when the component loads
    useEffect(()=>{
       Animated.timing(
           op,
           {
            toValue:1,
            duration:500
           }
       ).start();
        }, []);

//run when the text change
        useEffect(()=>{
            Animated.timing(
                op,
                {
                toValue:0.1,
                duration:500
                }
            ).start();
        }, [text]);

    return(
        <Animated.View style={{opacity:op}}>
            <Text style={{justifyContent:"center", alignItems:"center", paddingTop:70}}>
                Opacity is 1 when it loads
            </Text>
            <Text>{text}</Text>
            <Button
                onPress={()=>{setText("New Text")}}
                title="button"
            />
                     
        </Animated.View>
        
    );
}

export default Animation;