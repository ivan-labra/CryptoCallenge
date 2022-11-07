import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/store';
import Home from './src/screens/Home/Home';
import Header from './src/components/Header/index';
import { theme } from './src/utils/theme';
import AddCrypto from './src/screens/AddCrypto/AddCrypto';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
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
        <Stack.Screen
          name="AddCrypto"
          component={AddCrypto}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);
export default App;
