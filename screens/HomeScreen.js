import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, FlatList, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { blue, white } from '../constants/color';
import Search from '../components/Search';
import QuizItem from '../components/QuizItem';
import ContinueQuiz from '../components/ContinueQuiz';


const postCat = ["Popular", "Science", "HTML", "Javascript", "CSS3"]


const HomeScreen = ({ navigation }) => {
  const [active, setActive] = useState('Popular');

  const handleTab = (item) => {

    setActive(item);

  }






  return (


    <>
      <ScrollView>
        <View style={[{ flex: 1, backgroundColor: blue, }]}>
          <View style={styles.headerContainer}>
            <View>
              <TouchableOpacity>
                <Icon size={25} color={white} name="align-left" />
              </TouchableOpacity>
            </View>


            {/* <Image
              style={styles.image}
              source={{ uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" }} /> */}

            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginBtn}>Login</Text>
            </Pressable>


          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ color: white, fontSize: 17 }}>Hello , James</Text>
            <Text style={{ fontWeight: "500", paddingTop: 5, fontSize: 25, color: 'white' }}>Let's test your knowledge</Text>
          </View>

          <Search />




          <View style={styles.contentWrapper}>

            <View style={{ paddingBottom: 30 }}>
              <FlatList
                horizontal={true}
                data={postCat}
                renderItem={({ item, index }) => <TouchableOpacity key={index} >

                  <Text style={[styles.tabBtn, item === active ? styles.btnActive : ""
                  ]} onPress={() => handleTab(item)}>{item}</Text>
                </TouchableOpacity>}
              />
            </View>

            <View style={{ flex: 1, rowGap: 15 }}>
         
              <Pressable onPress={() => navigation.navigate('QuizRule')}>
                <QuizItem />
             </Pressable>
            </View>
            <Text style={{ fontSize: 20, color: 'black', marginTop: 20, marginBottom: 15, fontWeight: "500" }}>Continue Quiz</Text>
            <View style={{ flex: 1, rowGap: 15 }}>
              <ContinueQuiz />
              <ContinueQuiz />
            </View>


          </View>


        </View>
      </ScrollView>



    </>

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