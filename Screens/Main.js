import React, { Component } from "react";
import { View, StyleSheet,ScrollView} from "react-native";
import Contact from "../components/Contact";
import LatestNumbers from "../components/LatestNumbers";
import Numbers from "../components/Numbers";

class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Numbers style={styles.numbers}/>
        <LatestNumbers style={styles.latestNumbers}/>
        <Contact style={styles.contact}/>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1,            // all the available vertical space will be occupied by it
    justifyContent: 'space-between' // will create the gutter between body and footer
  },
  numbers:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    marginTop:5
  },
  latestNumbers:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
  },
  contact:{
    display:"flex",
    justifyContent:"center",
    flexDirection:"row",
    paddingBottom:2
  }
})
