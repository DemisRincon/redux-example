import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const List = (props) => {
  console.log(props.films);
  return (
    <View style={styles.container}>
      <Text>this is a son list</Text>
      {props.films.map((item)=><Text key={item.title}>{item.title}</Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aaa",
    height: '90%',
    width: '90%',
  },
});

export default List;
