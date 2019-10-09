import React, { Component } from 'react';
import {
    ActivityIndicator, View, Image, StyleSheet,
    ImageBackground, TouchableOpacity, Alert, AsyncStorage, Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer,
    StackNavigator, DrawerNavigator, DrawerItems, DrawerActions
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class result extends Component {
    constructor(props) {
        super(props);
        this.state = {

            final_result: 0,
            value1: 0,
            value2: 0,
            value3: 0,
            text_result: '',
            res: ''
        };
    }

    componentDidMount() {
        this.state.value1 = Math.round(this.props.navigation.state.params.value1);
        this.state.value2 = Math.round(this.props.navigation.state.params.value2);
        this.state.value3 = Math.round(this.props.navigation.state.params.value3);

        this.state.final_result = Math.round(this.props.navigation.state.params.final_result);
        console.log('C_ID', this.state.final_result);

        if (this.state.value1 < 5 && this.state.value2 < 5 && this.state.value3 < 5) {

          //  this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Best", });


        } else if (this.state.value1 > 5 && this.state.value2 < 5 && this.state.value3 < 5) {

          //  this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Normal", });


        } else if (this.state.value1 < 5 && this.state.value2 > 5 && this.state.value3 < 5) {

          //  this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Normal", });


        } else if (this.state.value1 < 5 && this.state.value2 < 5 && this.state.value3 > 5) {

         //   this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Normal", });


        } else if (this.state.value1 < 5 && this.state.value2 > 5 && this.state.value3 > 5) {

          //  this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Worst", });


        } else if (this.state.value1 > 5 && this.state.value2 > 5 && this.state.value3 < 5) {

           // this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Worst", });


        } else if (this.state.value1 > 5 && this.state.value2 < 5 && this.state.value3 < 5) {

           // this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Worst", });


        } else {
            //this.setState({ text_result: "Value of your test  was" + " " + this.state.final_result, });
            this.setState({ res: "Your healthy is a Worst", });
        }
    }


    render() {
        return (

            <View style={{
                flex: 1, justifyContent: "center", alignItems: "center"
            }}>

                <View style={{
                    zIndex: 10, width: '100%', flexDirection: 'row',
                    position: 'absolute', top: 0, left: 0, right: 0, height: 60,
                    backgroundColor: "#0000ff", alignItems: 'center', paddingTop: 4,
                }} >

                    <View style={{
                        justifyContent: "center",
                        alignItems: "center", width: '100%', height: '100%',
                        flexDirection: 'row', borderRadius: 15,
                    }}>
                        <Image source={require('../image/bar.png')}

                        ></Image>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.replace('Home');
                        }} style={{
                            marginLeft: 5, width: '90%',
                            justifyContent: 'center', alignItems: 'flex-end',
                        }}>
                            <Image source={require('../image/right2.png')}

                            ></Image>
                        </TouchableOpacity>




                    </View>


                </View>
                <ImageBackground style={styles.backgroundImage} source={require('../image/bglayer.jpg')} >
                    <View style={{
                        flexDirection: "column", flex: 1,
                        backgroundColor: "#fff",
                    }}>
                        <View style={{
                            marginTop: 5,
                            justifyContent: "center",
                            alignItems: "center", width: '100%'

                        }}>

                            <Image style={{
                                justifyContent: "center",
                                alignItems: "center",
                            }} source={require('../image/chart.png')}

                            ></Image>

                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <Text style={{
                                marginTop: 5,
                                textAlign: 'left',
                                width: "70%",
                                fontSize: 20, color: '#000', marginLeft: 5,
                            }}> Result of coughing </Text>
                            <Text style={{
                                marginTop: 5,
                                textAlign: 'left',
                                width: "25%",
                                fontSize: 20, color: '#000', marginLeft: 5,
                            }}> {this.state.value1} </Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <Text style={{
                                marginTop: 5,
                                textAlign: 'left',
                                width: "70%",
                                fontSize: 20, color: '#000', marginLeft: 5,
                            }}> Result of breathing pain </Text>
                            <Text style={{
                                marginTop: 5,
                                textAlign: 'left',
                                width: "25%",
                                fontSize: 20, color: '#000', marginLeft: 5,
                            }}> {this.state.value2} </Text>
                        </View>
                        <View style={{ width: "100%", flexDirection: "row" }}>
                            <Text style={{
                                marginTop: 5,
                                textAlign: 'left',
                                width: "70%",
                                fontSize: 20, color: '#000', marginLeft: 5,
                            }}> Result of itchy eyes </Text>
                            <Text style={{
                                marginTop: 5,
                                textAlign: 'left',
                                width: "25%",
                                fontSize: 20, color: '#000', marginLeft: 5,
                            }}> {this.state.value3} </Text>
                        </View>

                        <View
                            style={{
                                margin: '1%',
                                height: 3,
                                backgroundColor: '#D81458'
                            }}
                        />
                        <Text style={{
                            marginTop: 5,
                            textAlign: 'left',
                            width: "100%",
                            fontSize: 20, color: '#000', marginLeft: 5,
                        }}> {this.state.text_result} </Text>
                        <Text style={{
                            width: "100%",
                            marginTop: 5,
                            textAlign: 'left',
                            fontSize: 20, color: '#000', marginLeft: 5,
                        }}>{this.state.res}  </Text>

                    </View>

                </ImageBackground>

            </View>
        );
    }
}

export default result;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        marginTop: 60,
        height: "100%",
        resizeMode: 'cover'
    },

});

