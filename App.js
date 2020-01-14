import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import React from 'react';
import {Provider} from './src/context/blogContext';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/createScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
}
);

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App />
  </Provider>
}