import React, { Component } from 'react';
import { ActivityIndicator, View, Image, StyleSheet, ImageBackground, TouchableOpacity, Alert, AsyncStorage, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createAppContainer,
  StackNavigator, DrawerNavigator, DrawerItems, DrawerActions
} from 'react-navigation';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

    setTimeout(() => {

      this.props.navigation.navigate('Home')

    }, 1000);

  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ImageBackground style={styles.backgroundImage} source={require('../image/bglayer.jpg')} >
          <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "column", flex: 1 }}>

            <ActivityIndicator size="large" color="#71037c" />
            <Text style={{ margin: 10, }}>Please ...</Text>
          </View>

        </ImageBackground>

      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'cover'
  },

});

