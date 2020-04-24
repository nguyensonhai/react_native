import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Nguyễn Sơn Hải', key: '1' },
    { name: 'Nguyễn A', key: '2' },
    { name: 'Nguyễn B', key: '3' },
    { name: 'Nguyễn C', key: '4' },
    { name: 'Nguyễn D', key: '5' },
    { name: 'Nguyễn E', key: '6' },
    { name: 'Nguyễn F', key: '7' },
    { name: 'Nguyễn G', key: '8' },
    { name: 'Nguyễn H', key: '9' },
    { name: 'Nguyễn L', key: '10' },

  ]);
  const pressHandler = (id) => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.key != id);
    });
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item} >{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
      
       {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style ={styles.item} onPress={()=>{alert('You cliked on '+item.name)}}>{item.name}</Text>
        
          </View>
        )
      })}
      
      {people.map(item =>(
        <View key={item.key}>
      <Text style={styles.item}>{item.key}</Text>
      </View>
      ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingHorizontal: 20,
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
