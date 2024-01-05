import { Provider } from 'react-redux';
import React from 'react';
import HomeScreen from './components/HomeScreen';
import GetTodos from './components/GetTodos';
import { store } from './redux/store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GetData from './components/GetData';

function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <HomeScreen />
        <GetData />
        <GetTodos />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
