import React, { Component } from "react";
import { View, Text } from "react-native";
import PowerBalls from "../components/PowerBalls";
import Collapsible from "react-native-collapsible";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



export default class LatestNumbers extends Component {
  state = {
    data: [],
    isCollapsed: new Array(6).fill(true),
  };
  componentDidMount = () => {
    fetch("https://data.ny.gov/resource/dhwa-m6y4.json?$limit=5", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseJson) => {
        responseJson.map((newData) => {
          console.log(newData);
          this.setState({
            data: [
              ...this.state.data,
              {
                numbers: newData["winning_numbers"].split(" "),
                winDate: newData["draw_date"].substr(
                  0,
                  newData["draw_date"].indexOf("T")
                ),
                multiplier: newData["multiplier"],
              },
            ],
          });
        }); //simple value        );
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <View style={this.props.style}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Last 5 Winning Numbers
        </Text>
        {this.state.data.map((winData, index) => (
          <TouchableOpacity
            onPress={() => {
              let markers = [...this.state.isCollapsed];
              markers[index] = !markers[index];
              this.setState({ isCollapsed: markers });
            }} key={index}
          >
            <View style={{ borderColor: "black", elevation: 2 }} key={index}>
              <Text style={{ fontWeight: "bold", paddingLeft: 5 }}>
                {winData.winDate}
              </Text>
              {this.state.isCollapsed[index] ? 
              <FontAwesomeIcon icon={faChevronDown} size={20} color="green"/>: null}
              <Collapsible collapsed={this.state.isCollapsed[index]}>
                <View key={index} style={{ padding: 5, flexDirection: "row" }}>
                  {winData.numbers.map((num, ind) => (
                    <PowerBalls number={num} bgrnd={ind === 5 ? false : true} key={index+num}/>
                  ))}
                </View>
                <Text
                  style={{ fontWeight: "bold", paddingLeft: 5, color: "gold" }}
                >
                  {winData.multiplier + "X"}
                </Text>
              </Collapsible>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
