import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Animated,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';
import PopUp from './PopUp';
function Animation_S() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [moveCardY] = useState(new Animated.Value(30));
  const [txt, setTxt] = useState('Please click the banner!');
  const [txtOp] = useState(new Animated.Value(0));
  const [bgColor] = useState(new Animated.Value(1));
  const aniBgColor = bgColor.interpolate({
      inputRange:[0,1],
      outputRange:["#FF8066", "#2186C4"]
  })

console.log(aniBgColor)
  useEffect(() => {
    Animated.timing(
        moveCardY, {
      toValue: -50,
      duration: 1300,
      delay:1500
    }
    
    ).start();
  }, [showPopUp]);
  
//2.render sec
//run(fadeout) when txt change
  useEffect(()=>{
    Animated.timing(
        txtOp,
    {
      toValue:0,
      duration:1000,
    }).start();
},[txt]);
//1. will render first
//fade in when the page load
useEffect(()=>{
    Animated.timing(
        txtOp,
      {
      toValue:1,
      duration:1000,
    }).start();
},[]);

  return (
    <Animated.View style={[styles.bg, {backgroundColor:aniBgColor}]}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          setShowPopUp(!showPopUp);
        }}>
        <Image
          style={styles.Img}
          source={require('../asset/img_profile_banner.png')}
        />
      </TouchableOpacity>

      <Animated.View style={[styles.bg, {top: moveCardY}]}>
        {showPopUp ? <PopUp/> : null}
      </Animated.View>
     
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setTxt('Submit!');
          }}>
          <Text style={styles.txtBtn}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {marginTop:20}]}
          onPress={() => {
           Animated.timing(
               bgColor,
               {
                toValue:0,
                duration:1000
               }
           ).start();
          }}>
          <Text style={[styles.txtBtn]}>Change Background Color</Text>
        </TouchableOpacity>
        
      </View>
      <Animated.View style={{
          opacity:txtOp
      }}>
        <Text>{txt}</Text>
      </Animated.View>

    </Animated.View>
  );
}

export default Animation_S;
