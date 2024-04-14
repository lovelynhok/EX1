import * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Screen/Main';
import Project_1 from './Screen/Project_1';
import Project_2 from './Screen/Project_2';
import Project_3 from './Screen/Project_3';
import ProJect_4 from './Screen/Project_4';
import Project_5 from './Screen/Project_5';
import Project_6 from './Screen/Project_6';
import Project_7 from './Screen/Project_7';
import Project_8 from './Screen/Project_8';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator inititalRouteName ='index' screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Main" component={Main} options={{ title: 'Màn hình chính' }}/>
        <Stack.Screen name="Project_1" component={Project_1} options={{title:' Bài 1'}}/>
        <Stack.Screen name="Project_2" component={Project_2} options={{ title: 'Bài 2' }}/>
        <Stack.Screen name="Project_3" component={Project_3} options={{ title: 'Bài 3' }}/>
        <Stack.Screen name="Project_4" component={ProJect_4} options={{ title: 'Bài 4' }}/>
        <Stack.Screen name="Project_5" component={Project_5} options={{ title: 'Bài 5' }}/>
        <Stack.Screen name="Project_6" component={Project_6} options={{ title: 'Bài 6' }}/>
        <Stack.Screen name="Project_7" component={Project_7} options={{ title: 'Bài 7' }}/>
        <Stack.Screen name="Project_8" component={Project_8} options={{ title: 'Bài 8' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;