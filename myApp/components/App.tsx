import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  // Declare a state variable called "count"
  const [count, setCount] = useState(0);


  return (

    <View >
      <Text>tCount: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
    </View>
    
  );
}
