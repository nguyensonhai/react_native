import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default SectionListBasics = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'A', data: ['Alex', 'Adam', 'Adisto', 'Ander', 'Azzyua'] },
          { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
        ]}
        renderItem={({ item }) => <Text style={styles.item} onPress={() => { alert('You clicked on ' + item); }}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader} >{section.title}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'pink',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
