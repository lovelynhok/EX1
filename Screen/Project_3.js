import React from "react";
import { Touchable, View,props,Text, TouchableOpacity,  } from "react-native";


const Button = (props) => (
  <TouchableOpacity 
  onPress = { props.onPress}
  style = {{ 
      backgroundColor: "ff637c",
      alignSelf: "center",
      padding:10,
      margin:10,
      ...props.Buttonstyle,}}
>  

<Text style ={{color:"green"}}> {props.Text} </Text>
</TouchableOpacity>

);
export default () => (
<View style ={{ flex:1, justifyContent:"center"}} >
<Button
 Text ="hello"
  onPress = {() => alert ("hello")}

   />
<Button
        Text=" Say GoodBye"
        onPress={() => alert("goodbye")} 
        Buttonstyle={{ backgroundColor : "aqua"}} />


        </View>

)