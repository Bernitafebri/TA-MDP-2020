import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Text, Button
} from 'react-native';

import Styles from './index.styles';
import axios from 'axios'

export default function Index({navigation}) {
    const [movies, setMovies] =  useState([]);
    const [games, setGames] =  useState([]);

  useEffect( () => {
      axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then(res => {
          setMovies(res.data.map(el=>{ return {
            id: el.id, 
            title: el.title, 
            description: el.description,
            year: el.year,
            duration: el.duration,
            genre: el.genre,
            rating: el.rating,
            image_url: el.image_url
          }
        }))
      })
  }, [])

  useEffect( () => {
      axios.get(`https://backendexample.sanbersy.com/api/data-game`)
      .then(res => {
          setGames(res.data.map(el=>{ return {
            id: el.id, 
            title: el.name,
            release: el.release, 
            platform: el.platform,
            genre: el.genre,
            singlePlayer: el.singlePlayer,
            multiplayer: el.multiplayer,
            image_url: el.image_url
          }
        }))
      })
  }, [])

  const onPressCardView = (item, el) => {
    ToastAndroid.showWithGravity(
      item.first_name,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    navigation.navigate('Detail Page',{item, el}); 
  };

  const onPressProfil=()=>{
    navigation.navigate('About');
  }

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        <Button title="About" onPress={() =>onPressProfil()} />
        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Movie</Text>
        </View>

        <View style={Styles.scrollView}>
          {movies.map(item => ( 
            <TouchableOpacity
              key={item.id}
              style={Styles.cardView}
              onPress={() => onPressCardView(item)}>
              <View style={Styles.cardView1}>
                <Image source={{uri: item.image_url}} style={Styles.image} />
              </View>
              <View style={Styles.cardView2}>
                <Text style={Styles.text1}>{`${item.title}`}</Text>
                <Text style={Styles.text2}>{`${item.genre}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={Styles.titleContainer}>
          <Text style={Styles.title}>Games</Text>
        </View>
        <View style={Styles.scrollView}>
          {games.map(el => ( 
            <TouchableOpacity
              key={el.id}
              style={Styles.cardView}
              onPress={() => onPressCardView(el)}>
              <View style={Styles.cardView1}>
                <Image source={{uri: el.image_url}} style={Styles.image} />
              </View>
              <View style={Styles.cardView2}>
                <Text style={Styles.text1}>{`${el.title}`}</Text>
                <Text style={Styles.text2}>{`${el.genre}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 
