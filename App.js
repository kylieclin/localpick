import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { auth, database } from './server/src/firebase';


export default class App extends Component {
  state = {
    text: ''
  }

  componentDidMount() {
    this.fetchdata();
  }

  fetchdata = async () => {
    const data = await database.ref('data').once('value').then(snapshot => {
      return snapshot.val()
    });

    this.setState({text: data});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
