import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Header, Footer } from './components/HeaderFooter'; // Шлях до файлу з компонентами хедера і футера
import Rating from './Rating'; 

const TripForm: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [time, setTime] = useState('');
  const [carType, setCarType] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleFormSubmit = () => {
    console.log('Destination:', destination);
    console.log('Time:', time);
    console.log('Car Type:', carType);
    console.log('Rating:', rating);
  };
    
  return (
    <View>
      <Text>Destination:</Text>
      <TextInput
        value={destination}
        onChangeText={setDestination}
        placeholder="Enter destination"
      />
      <Text>Time:</Text>
      <TextInput
        value={time}
        onChangeText={setTime}
        placeholder="Enter time"
      />
      <Text>Car Type:</Text>
      <TextInput
        value={carType}
        onChangeText={setCarType}
        placeholder="Enter car type"
      />
      <Rating onSubmit={(rating) => setRating(rating)} />
      <Button
        onPress={handleFormSubmit}
        title="Submit"
        disabled={!destination || !time || !carType || rating === null}
      />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Lab2</Text>
      <TripForm />
      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default App;


