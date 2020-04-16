import React, {Component} from 'react';
import{StyleSheet,
Text,
View,
ImageBackground
} from 'react-native';

/*Images should be here above class and the styles
They are a global variable accessible througout the app. (Global Scope for Images)
*/
const SpaceImages = [
  {
    url: "https://i.imgur.com/9p4VsBw.jpg",
    caption: "When Galaxies Collide"
  },
  {
    url: "https://i.imgur.com/dggemYH.jpg",
    caption: "Florida, from above."
  },
  {
    url: "https://i.imgur.com/deI932c.jpg",
    caption: "LEGO Spaceman"
  },
  {
    url: "https://i.imgur.com/j69hRu8.jpg",
    caption: "Star Wars with the crew"
  },
  {
    url: "https://i.imgur.com/YUipl9m.jpg",
    caption: "Japanese drone aboard the ISS"
  },
  {
    url: "https://i.imgur.com/VcCPjaV.jpg",
    caption: "Not the ISS ..."
  }
 ];
export default class App extends Component {
  //props do not matter for this particular app 38 & 39 should not cause error
 constructor(props) {
   super(props);
   this.state ={
     index: 0,
     }
 }
 // To force rerenders, put the image on state
  render(){
    const image = SpaceImages[this.state.index];
    return(
      <View style={styles.container}>
      <View style={styles.empty}/>
      <ImageBackground source= {{uri: image.url}} style={styles.image}>
      </ImageBackground>
      <Text style ={styles.imageCaption}>{image.caption}</Text>
      <View style={styles.empty}/>
      </View>
    );

  }
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D4B5E',
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  imageCaption: {
    textAlign: 'center',
    width: 320,
    backgroundColor: 'rgba(100,100,100,0.5)',
    color: 'white'
  },
  empty: {
    flex:1,
  },
})
