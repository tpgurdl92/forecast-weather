import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName:"weather-hail",
        gradient:["#4DA0B0","#D39D38"]
    },
    Thunderstorm: {
        iconName:"ios-thunderstorm",
        gradient:["#141e30","#243b55"]
    },
    Drizzle:{
        iconName:"",
        gradient:[]
    } ,
    Rain:{
        iconName:"weather-rainy",
        gradient:["#304352","#d7d2cc"]
    } ,
    Snow:{
        iconName:"weather-snowy",
        gradient:["#BE93C5","#7BC6CC"]
    },
    Atmosphere:{
        iconName:"",
        gradient:[]
    },
    Clear:{
        iconName:"white-balance-sunny",
        gradient:["#9cecfb","#65c7f7","#0052d4"],
        title:"Sunny",
        subtitle:"let's go outside and have some fun"

    } ,
    Clouds:{
        iconName:"",
        gradient:[]
    } ,
    Haze:{
        iconName:"",
        gradient:[]
    } ,
    Dust:{
        iconName:"",
        gradient:[]
    } ,
    Mist:{
        iconName:"",
        gradient:[]
    } ,
}



export default function Weather({temp, condition}){
    console.log(temp);
    console.log(condition);
    return (
            <LinearGradient
          colors={weatherOptions["Clear"].gradient}
          style={styles.container} >
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={96} 
                    name={weatherOptions["Clear"].iconName} 
                    color="white"/>
                    <StatusBar barStyle="light-content" />
                    <Text style={styles.temp}>{temp}</Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions["Clear"].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions["Clear"].subtitle}</Text>
                </View>
                </LinearGradient>
                
            
    );
}


Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    /*condition:PropTypes.oneOf([
        "Thunderstorm"
        ,"Drizzle"
        ,"Rain"
        ,"Snow"
        ,"Atmosphere"
        ,"Clear"
        ,"Clouds"
        ,"Haze"
        ,"Mist"
        ,"Dust"
    
    ]).isRequired,*/
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    temp:{
        fontSize:42,
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontSize: 44,
        fontWeight:"300",
        marginBottom:10,
    },
    subtitle:{
        color:"white",
        fontWeight:"600",
        fontSize:24,
        
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems: "flex-start",
    }
});