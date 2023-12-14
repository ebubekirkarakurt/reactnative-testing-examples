import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppNavigation } from '../navigation/utils/useAppNavigation'

type Props = {
  
}

const SecondScreen = () => {
  const navigation = useAppNavigation()

  return (
    <View>
      <Text>SecondScreen</Text>
      
      <Button 
        title='Go to first screen' 
        onPress={()=> navigation.navigate("OnBoarding",{screen:'HomeScreen'})}
      />
    </View>
  )
}

export default SecondScreen

const styles = StyleSheet.create({})