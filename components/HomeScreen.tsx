import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'


const HomeScreen = () => {
    const [value, setValue] = useState(0)
    const [text, setText] = useState('')
  

    const increment = () =>{
        setValue((amount) => amount += 1)
    }
    const decrement = () =>{
        setValue((amount) => amount -= 1)
    }
    const reset = () =>{
        setValue(0)
    }

  return (
    <View>
      <Text testID='testId' >MyApp</Text>
      <Text testID='inputText' > {text} </Text>
      <Text testID='value' > {value} </Text>

      <Button 
        title='increment' 
        onPress={increment} 
      />

      <Button 
        title='decrement' 
        onPress={decrement} 
      />

      <Button 
        title='reset' 
        onPress={reset} 
      />

      <TextInput 
        value={text} 
        onChangeText={(txt) => setText(txt)} placeholder='Enter Text'
      />

      <Button 
        title='getData' 
        onPress={()=>console.log("hey")}
      />

    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})