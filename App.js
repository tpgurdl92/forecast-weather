import React from 'react';
import {Alert} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from 'expo-location';
import axios from "axios";

const API_KEY="a7fec12024627f139b765915e797f0be";

export default class extends React.Component {
  state = {
    isLoading:true,
  }
  
  getWeather = async(latitude, longitude) => {
    try{
      const {  
        data: {
              main: { temp },
              weather
        }
      } = await  axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
      console.log(temp);
      
      this.setState({
        isLoading:false,
        temp:temp,
        condition: weather[0].main,
      });
    }catch(error){
      console.log(error);
    }
    
  }

  getLocation = async() => {
    
    try{
      //권한요청
      const response = await Location.requestPermissionsAsync()
      console.log(response);
      //위치획득
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      
      //Send to API and get Weather
      this.getWeather(latitude,longitude);

      this.setState({isLoading:false});
    }catch(error){
      Alert.alert("I Can't find you");
    }
  }

  componentDidMount(){
    this.getLocation();
  }
  
  render(){
    const { isLoading, temp, condition } = this.state;
    
    return isLoading ?<Loading />:<Weather temp={temp} condition={condition}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  text:{
    color:'black',
  },
  yellowView:{
    flex:1,
    backgroundColor:"yellow",
  },
  buleView:{
    flex:2,
    backgroundColor:"blue",
  },

});
