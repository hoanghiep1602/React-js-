import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { View, Button, Text,  StyleSheet,SafeAreaView } from 'react-native';

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => ({
  type: INCREMENT
});

const decrement = () => ({
  type: DECREMENT
});

// Reducer function
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(counterReducer);

// Counter component
const Counter = ({ count, increment, decrement }) => {
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.tiltle}>Counter App </Text>
      <Text style={styles.buttonn}>Count: {count}</Text>
      <button style={styles.buttonn} onClick={increment}>Increment</button>
      <button  style={styles.buttonn}  onClick={decrement}>Decrement</button>
    </SafeAreaView>
  );
};

// Connect Counter component to Redux store
const ConnectedCounter = connect(
  state => ({ count: state.count }),
  { increment, decrement }
)(Counter);

// App component
const Bai1 = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

const styles = StyleSheet.create({

  container: {
  flex:1,
  alignItems:'center',
  backgroundColor:'pink',
  },
 
 tiltle :{
   fontSize:30,
   color:'red',
   backgroundColor:'black',
   fontWeight:'Bold',
   marginTop:90,
 },

 buttonn :{
   marginTop:50,
 }
});


export default Bai1;