
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import QuizRuleScreen from './screens/QuizRuleScreen';
import QuizScreen from './screens/QuizScreen';

const Stack = createNativeStackNavigator();

function App() {
  const token = true


  return (
    <>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={token ? 'Home' : 'Login'}
          screenOptions={({ route }) => ({
            headerShown:false
          })}
        >
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='QuizRule' component={QuizRuleScreen} />
          <Stack.Screen name='Quiz' component={QuizScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>



    </>
  );
}











export default App;
