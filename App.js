import React from 'react';
import {
 StyleSheet,
  Text,
View,
} from 'react-native';import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoinList from './CoinList';
import DataScreen from './DataScreen'


const Stack = createStackNavigator();



function Home() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="CoinList" component={CoinList} />
      <Stack.Screen name="DataScreen" component={DataScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};



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

export default Home;
