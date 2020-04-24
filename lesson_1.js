import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Nero');
  const [person, setPerson] = useState({ name: 'Hai', age: 25 });
  const clickHandler = () => {
      setName('Oke')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My name is {name}</Text>
        <Text>My realname is {person.name} and his age is {person.age}</Text>
      </View>
      <View style={styles.buttonContainer}></View>
      <Button title='Click me' onPress={clickHandler}/>
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
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
    color: "black",
  }
});
