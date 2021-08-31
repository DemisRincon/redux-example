import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import ViewArmor from './src/armor/ViewArmor'

import { withRedux } from './src/library/redux'

const App = () => {

  const persons =[
    {
      name:"demis",
      age:28
    },
    {
      name:"jauri",
      age:24
    },
    {
      name:"abraham",
      age:34
    },
    {
      name:"yovos",
      age:20
    },
    {
      name:"marck",
      age:27
    }
  ]
/*
  const response = fetch("https://ghibliapi.herokuapp.com/films")
  .then(response => response.json())
  .then(data => console.log(data));

  console.log(response);

*/
  return (
    <View>
      <Text>
        HELLO 
      </Text>
      <ViewArmor list={persons} text="this is a text from parent"/>
    </View>
    
  )
}

export default withRedux(App)

/*
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
*/
