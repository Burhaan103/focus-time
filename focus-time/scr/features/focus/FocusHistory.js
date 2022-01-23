import React from 'react';

import {Text, View, StyleSheet, SafeAreaView, Flatlist} from 'react-native';
import {fontSizes, spacing} from '../../utils/sizes';
import {RoundedButton} from '../../component/RoundedButton';

const HistoryItem = (item, index) => {
  return(
    <Text style={style.HistoryItem(status.item)}>
    {
      item.subject
    }
    </Text>
  )
}

export const FocusHistory = ({focusHistory, onClear})=>{
  const clearHistory = () => {
    onClear()
  }

  return(
    <>
    <SafeAreaView style={{flex:1, alignItems:'center'}}>

       {!!focusHistory.length && (
         <>
    <Text style={style.title}>thing we foced</Text>
    <Flatlist 
    style={{flex:1}}
     contentContainerStyle={{flex:1, alignItems:'center'}}
     data={focusHistory}
     renderItem={HistoryItem}
    />
     <View style={style.clearContainer}>
     <RoundedButton title="Clear" size={75} onPress={()=> onClear()} />
    </View>
    </>
    )}
    </SafeAreaView>
   
    </>
  )
}


const style = StyleSheet.create({
  HistoryItem : (status) =>({
    color : status > 1 ?  'red' : 'green',
    fontSizes : fontSizes.md
  }),
  title:{
    color:'white',
    fontSize : fontSizes.lg,
  },
  clearContainer:{
    alignItems:'center',
    padding:spacing.lg,
  }
})

