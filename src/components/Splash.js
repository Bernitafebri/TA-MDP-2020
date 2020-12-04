import React ,{useEffect, SetTimeOut} from 'react';
import {
  StyleSheet,
  View,
  Image, Text
} from 'react-native';
import Logo from '../asset/logo2.png';

export default function MovGa({navigation}) {
    const styles = StyleSheet.create({
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
        }
    })


    useEffect(() => {
        setTimeout(() => {
          navigation.replace('Home Page');
        }, 3000);
      }, []);
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo}/>
            <Text style={styles.title}>MOVGAME</Text>
        </View>
    );
  }


  