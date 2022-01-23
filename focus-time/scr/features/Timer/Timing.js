import React from 'react';

import {View, StyleSheet} from 'react-native';
import {RoundedButton} from '../../component/RoundedButton';

export const Timing = ({onChangeTime}) => {
  return(
    <>
    <View style={style.button}>
    <RoundedButton  size={75} title="10" onPress={()=> onChangeTime(10)}/>
    </View>

     <View style={style.timigButton}>
    <RoundedButton  size={75} title="15" onPress={()=> onChangeTime(15)}/>
    </View>

     <View style={style.timigButton}>
    <RoundedButton  size={75} title="20" onPress={()=> onChangeTime(20)}/>
    </View>
    </>
  )
}


const style = StyleSheet.create({
 button:{
   flex:1,
   alignItems:'center',
 },
})