import React, { Component } from 'react';
import {
    ActivityIndicator, View, Image, StyleSheet,
    TextInput, ImageBackground, Button, TouchableOpacity, Alert, AsyncStorage, Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {
    createAppContainer, NavigationActions,
    StackNavigator, DrawerNavigator, DrawerItems, DrawerActions
} from 'react-navigation';


import Slider from "react-native-slider";

class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 0.0,
            value2: 0.0,
            value3: 0.0,
            final_result: 0,
            result_value: 0,
        };

        this.Func_sub = this.Func_sub.bind(this);
        this.Show_result = this.Show_result.bind(this);
    }




    Func_sub() {


        this.state.result_value = this.state.value1 + this.state.value2 + this.state.value3;
       
        console.log('r', this.state.result_value);
       
        console.log('r', this.state.result_value / 3);

        this.state.final_result = this.state.result_value / 3;

        this.setState({ final_result: this.state.final_result, });

    }

    Show_result() {

        if (this.state.final_result === 0) { Alert.alert("First,You should submit data");}
        else {
            this.props.navigation.navigate("results", {

                final_result: this.state.final_result,
                value1: this.state.value1,
                value2: this.state.value2,
                value3: this.state.value3,
            });
        }

    }
    componentDidMount() {

    }



    render() {
        
        return (
            <View>
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
                        <Text style={{
                            width: '50%',
                            flex: 1, textAlign: 'right',
                            fontSize: 16, color: '#fff', marginLeft: 5,
                        }}> demo app </Text>

                    </View>



                </View>
                <View
                    style={{ flexDirection: "row", marginTop: 70, }}
                >
                    <View
                        style={{
                            marginLeft: '1%',
                            width: 3,
                            backgroundColor: '#D81458'
                        }}
                    />
                    <View>
                        <View
                            style={{

                                flexDirection: "row",
                                width: '95%'
                                , borderRadius: 11,
                                backgroundColor: "#fff",
                                justifyContent: 'center', alignItems: 'center',

                            }}

                        >

                            <Text style={{

                                width: '50%', textAlign:
                                    'left', color: '#000',
                            }}>0</Text>



                            <Text style={{

                                width: '48%', textAlign:
                                    'right', color: '#000',
                            }}>10</Text>


                        </View>
                        <View style={{
                            justifyContent: 'center', alignItems: "stretch",

                            width: '95%', backgroundColor: '#fff',
                            marginRight: '3%', borderRadius: 10,
                            borderColor: '#1fb28a',
                        }}>
                            <Text style={{ marginTop: 5, }}>
                                coughing
                           </Text>
                            <Slider

                                maximumValue='10'
                                minimumValue='0'
                                minimumTrackTintColor='#1fb28a'
                                maximumTrackTintColor='#d3d3d3'
                                thumbTintColor='#1a9274'
                                value={this.state.value1}
                                onValueChange={value1 => this.setState({ value1 })}
                            />
                            <Text>
                                Value: {this.state.value1}
                            </Text>
                            <Text
                                style={{ marginTop: 5, }}
                            >
                                breathing pain
                              </Text>
                            <Slider

                                maximumValue='10'
                                minimumValue='0'
                                minimumTrackTintColor='#2f2f2f'
                                maximumTrackTintColor='#d3d3d3'
                                thumbTintColor='#1a9274'
                                value={this.state.value2}
                                onValueChange={value2 => this.setState({ value2 })}
                            />
                            <Text style={{ marginTop: 5, }}>
                                Value: {this.state.value2}
                            </Text>
                            <Text style={{ marginTop: 5, }}>
                                itchy eyes
                     </Text>
                            <Slider

                                maximumValue='10'
                                minimumValue='0'
                                minimumTrackTintColor='#1073ff'
                                maximumTrackTintColor='#b7b7b7'
                                thumbTintColor='#1a9274'
                                value={this.state.value}
                                onValueChange={value3 => this.setState({ value3 })}
                            />

                            <Text style={{ marginTop: 5, }}>
                                Value: {this.state.value3}
                            </Text>
                        </View>

                        <View

                            style={{
                                margin: "1%",
                                flexDirection: "row",
                                width: '100%'
                                , borderRadius: 11,
                                backgroundColor: "#fff", padding: 4,


                            }}

                        >

                            <TouchableOpacity
                                onPress={() => {
                                    this.Func_sub()
                                }}

                                style={{
                                    width: '46%',
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                    borderRadius: 11,
                                    backgroundColor: "#0000ff",
                                    padding: 4,

                                    marginTop: 5,
                                }}>
                                <Text style={{
                                    width: '100%', textAlign:
                                        'center', color: '#fff',
                                }}>Submit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    this.Show_result()
                                }}
                                style={{
                                    width: '46%',
                                    marginLeft: '1%',
                                    marginRight: '1%',
                                    borderRadius: 11,
                                    backgroundColor: "#0000ff",
                                    padding: 4,


                                    marginTop: 5,
                                }}>
                                <Text style={{
                                    width: '100%', textAlign:
                                        'center', color: '#fff',
                                }}>Show results</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>


            </View>
        );
    }
}

export default home;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,

        resizeMode: 'cover'
    },
    container: {
        flex: 1,

        alignItems: "stretch",
        marginTop: 10,
    }
});

