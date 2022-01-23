import React,{useState} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../component/RoundedButton';
import {fontSize, spacing} from '../../utils/sizes';
import {colors} from '../../utils/colors';

export const Focus = ({addSubject}) => {
  const [item, setItem] = useState(null)
  return(
    <View style={styles.container}>
    <View style={styles.titleContainer}>
    <Text style={styles.title}>What do you like to focus ? </Text>
   <View style={styles.inputContiner}>
    <TextInput 
    style={{flex:1, marginRight:20}}
    onSubmitEdditing={({nativeEvent})=>{
      setItem (nativeEvent.text)
    }}
    />
    <RoundedButton size={50} title="+" onPress={()=>{
      addSubject(item)
    }}/>
   </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    padding:spacing.xxl,
  },

  title:{
   color:'white',
   fontFamily:'bold',
   fontSize:20,
  },

  titleContainer : {
    flex:0.5,
    paddingTop:16,
    justifyContent:'center',
  },
  inputContiner:{
    paddingTop:20,
    flexDirection:'row',
    alignItems:'center',
    
  },
})