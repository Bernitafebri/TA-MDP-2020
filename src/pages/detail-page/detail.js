import React from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';

import Styles from './detail.styles';

export default function Detail({route}) {
 const { item } = route.params;
 const { el } = route.params;

  return ( 
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollView}>
        <View style={Styles.view}>
          <View style={Styles.titleContainer}>
          
            {/* MOVIE */}
          </View>
          <View style={Styles.view2}>
            <View style={{marginBottom: 10}}>
              <Text style={Styles.text}></Text>
              <Text style={Styles.title}>{item.title}</Text>
              <Text>Genre : {item.genre}</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
