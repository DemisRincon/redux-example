import React, { useEffect } from 'react';
import {View,StyleSheet,Text} from 'react-native';
import ListArmor from '../armor/ListArmor';


const ViewContainer = (props) => {

  const { films,getFilms} =props

useEffect(() => {
  getFilms()
}, [])

  return (
    <View style={styles.container}>
      <Text>{"hello"}</Text>
      <ListArmor />
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

export default ViewContainer;
