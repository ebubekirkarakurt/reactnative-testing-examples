import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from '../components/SecondScreen';
import HomeScreen from '../components/HomeScreen';

export type RootStackParamList = {
  OnBoarding: NavigatorScreenParams<OnBoardingStackParamsList>;
};

export type OnBoardingStackParamsList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const OnBoardingStack = createNativeStackNavigator<OnBoardingStackParamsList>();

const OnBoardNavigator = () => {
  return (
    <OnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnBoardingStack.Screen name="HomeScreen" component={HomeScreen} />
      <OnBoardingStack.Screen name="SecondScreen" component={SecondScreen} />
    </OnBoardingStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="OnBoarding" component={OnBoardNavigator} />
    </RootStack.Navigator>
  );
};
