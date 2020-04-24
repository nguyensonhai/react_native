import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nero"
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter your age</Text>
      <TextInput
        style={styles.textInput}
        placeholder="25"
        onChangeText={(value) => setAge(value)}
        keyboardType="numeric"
      />

      <Text>My name is {name} and my age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    padding: 8,
    margin: 10,
    width: 300,
    textAlign: "center",
  }
});
