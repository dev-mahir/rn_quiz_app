
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();


function App() {

  return (
    <>
      
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>

   

    </>
  );
}











export default App;
