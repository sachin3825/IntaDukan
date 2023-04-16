import React from 'react';
import { Text, TextInput, StyleSheet, SafeAreaView, Button } from 'react-native';

const App = () => {

  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Send Eth
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Value of trnx'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Address'
      />
      <Button
        title='Submit'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
  },
  input: {
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
