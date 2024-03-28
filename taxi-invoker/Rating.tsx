import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface RatingProps {
  onSubmit: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (text: string) => {
    const parsedRating = parseInt(text);
    setRating(isNaN(parsedRating) ? 0 : parsedRating);
  };

  const handleSubmit = () => {
    onSubmit(rating);
  };

  return (
    <View>
      <Text>Rate your trip:</Text>
      <TextInput
        value={rating.toString()}
        onChangeText={handleRatingChange}
        keyboardType="numeric"
        placeholder="Enter rating (1-5)"
      />
      <Button onPress={handleSubmit} title="Submit Rating" />
    </View>
  );
};

export default Rating;

