import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const img = require('./assets/image1.png')
export default function App() {
  return (
    <View style={styles.container}>    
      <View style={{
      width: 640, height: 400, position: 'absolute', margin: 'auto', left: 0,
      right: 0, top: 0, bottom: 0, WebkitPerspective: 1200, perspective: 1200, transition: '1s',width:'90%',
    }}>
      <ImageBackground source={img} style={{size:'cover',width:'100%',height:'100%'}}> 
      <View style={{alignContent:'center',margin:'auto',marginLeft:'45%'}}>
        <View style={{color:'rgb(180, 100, 10)',marginTop:'-30%',fontSize:20}} >

          <Text style={{color:'rgb(180, 100, 10)',fontSize:16,}}>I hope you get to do something fun to celebrate! </Text>
          <Text style={{color:'rgb(180, 100, 10)',fontSize:16,}}>you deserve everything happy</Text>
          <Text style={{color:'rgb(180, 100, 10)',fontSize:16,}}>Wishing you that all year long!</Text>
          <Text style={{color:'rgb(180, 100, 10)',fontSize:16,marginLeft:'20%'}}>Have a blissful day </Text>
        </View>

        <marquee style={{color:'rgb(252, 70, 0)',fontSize:32}} behavior="slide" direction="left">Happy Birthday...</marquee>

        <View style={{color:'rgb(206, 188, 84)',marginLeft:'20%',marginTop:10,fontSize:22}}>

          <marquee style={{color:'rgb(252, 110, 0)',}} behavior="slide" direction="down">Wishing you  </marquee>
          <marquee style={{color:'rgb(252, 110, 0)',marginLeft:'-10%'}} behavior="slide" direction="up">success,Joy and</marquee>
          <marquee style={{color:'rgb(252, 110, 0)',marginLeft:'-20%'}} behavior="slide" direction="down">Happiness always.... </marquee>
        </View>
      </View>
       </ImageBackground> 
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'wheat',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
