import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Button from './src/components/Button';
import Display from './src/components/Display';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [current, setCurrent] = useState(0);
  const [values, setValues] = useState([0,0]);
  const [operation, setOperation] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [clearDisplay, setClearDisplay] = useState(false);

  const addDigit = (n) =>{
    if(n == "." && displayValue.includes(".")){
      return
    }

    const isClearDisplay = displayValue == '0' || clearDisplay
    const currentValue = isClearDisplay ? "" : displayValue
    const isDisplayValue = currentValue + n

    setDisplayValue(isDisplayValue)
    setClearDisplay(false)

    if(n !== "."){
      const newValue = parseFloat(isDisplayValue)
      const nValues = [...values]
      nValues[current] = newValue
      setValues(nValues)
    }

  }

  const clearMemory = () =>{
    setCurrent(0);
    setValues([0,0]);
    setOperation(null);
    setDisplayValue("0");
    setClearDisplay(false);
  }

  const selOperation = (nOperation) =>{
    if(current === 0){
      setOperation(nOperation)
      setCurrent(1)
      setClearDisplay(true)
    }
    else{
      const equals = nOperation === "="
      const nValues = [...values]
      try {
        nValues[0] = eval(`${nValues[0]} ${operation} ${nValues[1]}`)
      } catch (error) {
        nValues = values[0]
      }

      nValues[1] = 0
      setDisplayValue(nValues[0])
      setOperation(equals? null : nOperation)
      setCurrent(equals? 0 : 1)
      setClearDisplay(!equals)
      setValues(nValues)
    }
    // setDisplayValue('0')
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <Button triple label="AC" onPress={clearMemory}/>
        <Button operation label="/" onPress={selOperation}/>
        <Button label="7" onPress={addDigit}/>
        <Button label="8"  onPress={addDigit}/>
        <Button label="9"  onPress={addDigit}/>
        <Button operation label="*"  onPress={selOperation}/>
        <Button label="4"  onPress={addDigit}/>
        <Button label="5"  onPress={addDigit}/>
        <Button label="6"  onPress={addDigit}/>
        <Button operation label="-" onPress={selOperation}/>
        <Button label="1"  onPress={addDigit}/>
        <Button label="2"  onPress={addDigit}/>
        <Button label="3"  onPress={addDigit}/>
        <Button operation label="+" onPress={selOperation}/>
        <Button double label="0"  onPress={addDigit}/>
        <Button label="." onPress={addDigit}/>
        <Button label="=" onPress={selOperation}/>
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
