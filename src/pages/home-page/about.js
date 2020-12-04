import React from 'react';
import {View, Image, Text} from 'react-native';

import Styles from './about.styles';
import Profil from '../ber.png';


export default function About({}) {
  return ( 
        <View style={Styles.container}>
            <Image source={Profil} style={Styles.logo}/>
            <Text style={Styles.title}>BERNITA FEBRIHATIN</Text>
            <Text style={Styles.title}>21120118120023</Text>
            <Text style={Styles.text}>KELOMPOK 18</Text>
            <Text style={Styles.text1}>Praktikum MDP 2020</Text>
        </View>
  );
}
