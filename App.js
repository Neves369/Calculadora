import { StatusBar } from 'expo-status-bar';
import Button from './src/components/Button';
import Display from './src/components/Display';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [displayValue, setDisplayValue] = useState('0');

  const addDigit = (n) =>{
    setDisplayValue(n)
  }

  const clearMemory = () =>{
    setDisplayValue('0')
  }

  const setOperation = (operation) =>{
    setDisplayValue('0')
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <Button triple label="AC" onPress={clearMemory}/>
        <Button operation label="/" onPress={setOperation}/>
        <Button label="7" onPress={addDigit}/>
        <Button label="8"  onPress={addDigit}/>
        <Button label="9"  onPress={addDigit}/>
        <Button operation label="*"  onPress={setOperation}/>
        <Button label="4"  onPress={addDigit}/>
        <Button label="5"  onPress={addDigit}/>
        <Button label="6"  onPress={addDigit}/>
        <Button operation label="-" onPress={setOperation}/>
        <Button label="1"  onPress={addDigit}/>
        <Button label="2"  onPress={addDigit}/>
        <Button label="3"  onPress={addDigit}/>
        <Button operation label="+" onPress={setOperation}/>
        <Button double label="0"  onPress={addDigit}/>
        <Button label="." onPress={addDigit}/>
        <Button label="=" onPress={setOperation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
