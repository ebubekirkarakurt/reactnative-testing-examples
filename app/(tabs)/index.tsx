import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '../../navigation/navigation';

export default function TabOneScreen() {
  return <RootNavigator></RootNavigator>;
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
});
