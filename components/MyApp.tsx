import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import useAPI from './UseApi'

type Props = {
    onItemPressed : ()=> void
}

const MyApp = (props: Props) => {
    const [value, setValue] = useState(0)
    const [text, setText] = useState('')
    const result = useAPI

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
      <Button title='increment' onPress={increment} ></Button>
      <Button title='decrement' onPress={decrement} ></Button>
      <Button title='reset' onPress={reset} ></Button>
      <Button title='onItemPress' onPress={props.onItemPressed} ></Button>
      <TextInput value={text} onChangeText={(txt) => setText(txt)} placeholder='Enter Text'/>
      <Button title='getData' onPress={()=>console.log(result)}/>
      {/* <FlatList 
        data={result}
        renderItem={({item})=>{
            return(
                <View>
                    <Text> {item} </Text>
                </View> 
            )
        }}
      />    */}
    
    </View>
  )
}

export default MyApp

const styles = StyleSheet.create({})