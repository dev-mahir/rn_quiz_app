import React, { useLayoutEffect } from 'react'
import { Dimensions, StyleSheet, Text, View, } from 'react-native'
import { blue, white } from '../constants/color';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';



const postCat = ["Popular", "Science", "HTML", "Javascript", "CSS3"]


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      tabBarLabel: 'Home',
      headerTitle: 'Booking.com',
      headerRight: () => (
        <FontAwesome name="bell" size={20} color="white" style={{ marginRight: 12 }} />
      ),
    })
  }, [])


  return (
    <View>
      <Header />
    </View>

  )
}


const styles = StyleSheet.create({
  loginBtn: {
    color: white,
    fontWeight: "500",
    fontSize: 18
  },
  heightFull: {
    height: Dimensions.get('window').height
  },
  headerContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  image: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  contentWrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 30
  },
  tabBtn: {
    fontSize: 15,
    color: "gray",
    paddingHorizontal: 15,

  },
  btnActive: {
    textDecorationColor: blue,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    color: blue,

  }



})

export default HomeScreen;