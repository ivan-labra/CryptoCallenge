import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/screens/Home/Home';
import Header from './src/components/Header/index';
import { theme } from './src/utils/theme';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <Header />,
            headerStyle: {
              backgroundColor: theme.blue,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
export default App;
