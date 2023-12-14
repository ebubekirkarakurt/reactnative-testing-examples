import { StyleSheet, View } from 'react-native';
import MyApp from '../../components/MyApp';



export default function TabOneScreen() {

  function onItemPress() : void{
    console.log("pressed")
  }

  return (
    <View style={styles.container}>
      <MyApp onItemPressed={onItemPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
