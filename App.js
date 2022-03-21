import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, ThemeProvider } from "react-native-elements";
import * as SplashScreen from "expo-splash-screen";
import Main from "./Screens/Main";
// // Prevent native splash screen from autohiding before App component declaration
// SplashScreen.preventAutoHideAsync()
//   .then((result) =>
//     console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`)
//   )
//   .catch(console.warn); // it's good to explicitly catch and inspect any error

export default class App extends React.Component {
  // componentDidMount() {
  //   // Hides native splash screen after 2s
  //   setTimeout(async () => {
  //     await SplashScreen.hideAsync();
  //   }, 2000);
  // }

  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar />
          <Main />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }})