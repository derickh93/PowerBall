import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Linking } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'


export default function Contact(props) {
  return (
    <View>
    <View style={props.style}>
      <Icon
        name="phone"
        size={40}
        color="green"
        onPress={() => {
          Linking.openURL("tel:1-800-522-4700");
        }}
      />
        <Text style={{fontWeight:"bold", color:"black",paddingRight:20,paddingLeft:5}}>
        National Council on Problem Gambling
      </Text>
      <FontAwesomeIcon icon={faGlobe} size={40} color="green" onPress={() => {
          Linking.openURL("https://www.ncpgambling.org/");
        }}/>
    </View>
    <Text style={{fontWeight:"bold", color:"black",paddingRight:20,paddingLeft:5,fontSize:10}}>
        Powerball Generator is not a gambling site of any kind. 
        We are simply here to provide 
        information for entertainment purposes only.
      </Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
    faIcon: {
      padding:10
    },
  });
