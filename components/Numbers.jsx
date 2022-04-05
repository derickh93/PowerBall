import { StyleSheet, Text, View } from "react-native";
import React, { Component, useState } from "react";
import { Button, ThemeProvider } from "react-native-elements";
import PowerBalls from "./PowerBalls";
import { NativeModules } from 'react-native';

const { Yodo1MASAds } = NativeModules;


export default class Numbers extends Component {
  state = {
    data: [],
  };

  getRandomInt = (maxn) => {
    let min = Math.ceil(1);
    let max = Math.floor(maxn);
    return Math.floor(Math.random() * (max - 1) + 1);
  };

  generateNumbers = () => {
    this.setState({ data: [] });
    let arr = [];
    for (let i = 0; i < 5; i++) {
      let num = this.getRandomInt(70);
      while (arr.includes(num)) {
        num = this.getRandomInt(70);
      }
      arr.push(num);
    }

    let num = this.getRandomInt(27);
    arr.push(num);
    this.setState({ data: arr });
  };

  render() {
    return (
      <View style={this.props.style}>

          <Button
          title="Generate Numbers"
          onPress={this.generateNumbers}
          buttonStyle={{
            borderColor: 'black',
          }}
          type="outline"
          raised
          titleStyle={{ color: 'green' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
        />
        <View style={styles.button}>
          {this.state.data.map((num, index) => (
                <PowerBalls number={num} bgrnd={index === 5 ?false : true} key={index}/>
                ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row", // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: "space-between", // will create the gutter between body and footer,
    padding:5
  },
});
