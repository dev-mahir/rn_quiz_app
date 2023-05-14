import React, {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = input;

  const handleInput = (e) => {
    setInput(() => ({
      ...input,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <View>
      <TextInput placeholder='Enter email' name="email" value={email} onChange={handleInput} />
      <TextInput placeholder='Enter password' name="password" value={password} onChange={handleInput} />
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Forgotten password</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;