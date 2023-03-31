import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import { Card, Icon } from 'react-native-elements';
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import logotempo from './assets/imagem/logotempo.png';
import styles from './globalStyles/styles.ts';

const API_URL = 'https://api.hgbrasil.com/weather';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${API_URL}?locale=${city}&key=your-app-token`);
      setWeather(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/imagem/bg.jpg')} style={styles.image}>

        <View style={styles.content}>
          <Image source={logotempo} style={styles.logo} />

          <View style={styles.searchContainer}>

            <TextInput
              style={styles.input}
              onChangeText={text => setCity(text)}
              value={city}
              placeholder="Digite a cidade ou estado"
            />
            <TouchableOpacity onPress={handleSearch}
            style={styles.searchButton}>
              <Icon name="search1" type="antdesign" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {weather.temp && (
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>{weather.city}</Card.Title>
              <Card.Divider style={styles.cardDivider} />
              <View style={styles.cardItem}>
                <FontAwesome name="thermometer-full" size={24} color="black" />
                <Text style={styles.cardItemText}>Temperatura: {weather.temp}°C</Text>
              </View>
              <View style={styles.cardItem}>
                <AntDesign name="cloud" size={24} color="black" />
                <Text style={styles.cardItemText}>Condição: {weather.description}</Text>
              </View>
              <View style={styles.cardItem}>
                <FontAwesome5 name="wind" size={24} color="black" />
                <Text style={styles.cardItemText}>Velocidade do vento: {weather.wind_speedy}</Text>
              </View>
              <View style={styles.cardItem}>
                <Entypo name="water" size={24} color="black" />
                <Text style={styles.cardItemText}>Umidade: {weather.humidity}%</Text>
              </View>
            </Card>
          )}

        </View>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
