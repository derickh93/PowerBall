import { StyleSheet, Text, View } from "react-native";
import React from 'react'

function PowerBalls(props){
  return (
    <View style={props.bgrnd ? styles.normBall:styles.powerBall}>
      <Text style={styles.powerballTxt}>{props.number}</Text>
    </View>
  )
}

export default PowerBalls

const styles = StyleSheet.create({
    normBall:{
      flexDirection: 'column', // inner items will be added vertically
      flexGrow: 1,
      justifyContent:"center"          // all the available vertical space will be occupied by it
      ,width:50,
      height:50
      ,borderRadius:50/2,
      padding:10,
       backgroundColor:'white',
       margin:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
        elevation: 10
    },    powerBall:{
      flexDirection: 'column', // inner items will be added vertically
      flexGrow: 1,
      justifyContent:"center"          // all the available vertical space will be occupied by it
      ,width:50,
      height:50
      ,borderRadius:50/2,
      padding:10,
       backgroundColor:'red',
       margin:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 10,  
        elevation: 10
    },
    powerballTxt:{

      textAlign:"center"
      ,       fontWeight:"bold"
    },
    
  })