import React, { useState } from "react";
import {View, Text, Image} from 'react-native'
import skyBackground from "./images/blueskybackground.png";
import mountainBackground from "./images/mountainthirdrange.png";

const Background = () => {
return (
  <div>
   {/*} <img 
      src={mountainBackground}
      alt="Mountain foreground"
      height="100%"
      z-index="1"
    />
    <img 
      src={skyBackground}
      alt="Blue sky background"
      z-index="-1"
      height="100%"
/> */}
    <View style={styles.container}>
      <View style = {styles.backgroundContainer}>
        <Image source = {require('./images/blueskybackground.png')} resizeMode = 'cover' style = {styles.backdrop} />
      </View>
      <View style = {styles.overlay}>
        <Text style = {styles.headline}>It should appear in front of the Background Image</Text>
        <Image style = {styles.logo} source = {require('./images/mountainthirdrange.png')} />
      </View>
    </View>
  </div>
 );
};

export default Background;


var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
    opacity: 0.5,
    backgroundColor: '#000000'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 18,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  }
});