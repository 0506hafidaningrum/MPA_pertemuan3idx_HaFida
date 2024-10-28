import React from "react";
import { Text, View, Image, TextInput } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 2000, height: 80, backgroundColor: 'grey'}}></View>
      <Text>Hafida</Text>
      <Text>Ningrum</Text>
      <Mahasiswa />
      <Text>Beww</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Mahasiswa = () => {
  return <Text>Mahasiswa STTP</Text>;
};

const Photo = () => {
  return (
    <Image
    source={{uri: 'https://i.pinimg.com/564x/24/7d/1a/247d1aef86908091ffbc5ec5068ae90c.jpg'}}
    style={{width: 200, height: 200}}
    />
  );
};

export default App;