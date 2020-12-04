import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily : 'bauhaus 93',
    justifyContent: 'center'
},
logo :{ 
    height: 169,
    width: 128,
    alignItems: 'center'
},
text: {
    fontSize: 20, 
    fontWeight: 'bold'
  },
text1: {
    fontSize: 15, 
  },


  // container: {
  //   flex: 1,
  // },
  // scrollView: {
  //   width,
  //   backgroundColor: '#f5f5f5',
  //   paddingLeft: 10,
  //   paddingRight: 10,
  // },
  // view: {
  //   flex: 1,
  //   alignItems: 'center',
  // },
  // view1: {
  //   justifyContent: 'center',
  //   marginBottom: 20,
  //   alignItems: 'center',
  // },
  // view2: {
  //   backgroundColor: '#fff',
  //   flex: 1,
  //   width: '100%',
  //   paddingHorizontal: 20,
  //   paddingVertical: 40,
  //   borderRadius: 30,
  //   marginTop: 20
  // },
  // imageProfil: {
  //   width: 130,
  //   height: 130,
  //   borderRadius: 100,
  // },
  // text: {
  //   fontSize: 15, 
  // },
  // text1: { 
  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.3,
  // },
  // titleContainer: {
  //   height: 70,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 20
  // },
  // title: {
  //   fontSize: 25,
  //   color: '#000',
  // },
  // nameView: {
  //   marginTop: 8,
  //   alignItems: 'center',
  // },
  // nameText: {
  //   fontSize: 20,
  //   letterSpacing: 0.3,
  //   marginBottom: 3,
  // },
  // emailText: {
  //   letterSpacing: 0.3,
  //   fontSize: 15,
  // },
  // list: {
  //   paddingVertical: 8,
  //   borderBottomWidth: 0.5,
  //   borderColor: '#a5a5a5',
  // },
});

export default main;
