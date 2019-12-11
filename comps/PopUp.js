import React, {useState} from 'react';
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

function PopUp(props) {
  return (
    <View style={styles.bg_PopUp}>
      <View style={styles.card_PopUp}>
        <View style={styles.profile_PopUp}></View>
        <View style={styles.txt_PopUp}></View>
        <View style={styles.txt_PopUp}></View>
        <View style={styles.txt_PopUp}></View>
        <TouchableOpacity 
        style={styles.desc_PopUp}
        >

        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PopUp;
