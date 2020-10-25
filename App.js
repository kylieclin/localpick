import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth, database } from './server/src/firebase';


export default function App({token_id = 'token_id'}) {
  const [state, setState] = useState({ text: ''});

  useEffect(() => {
    async function fetchdata() {
      const data = await database.ref(`user/${token_id}`).once('value').then(snapshot => {
        return snapshot.val()
      });
    
      setState({text: data})
    }
    fetchdata();
  }, [token_id])


  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Text>{state.text}</Text>
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
});
