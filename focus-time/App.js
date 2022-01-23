import  React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Platform, AsyncStorage } from 'react-native';
import {Focus} from './scr/features/focus/Focus';
import {Timer} from './scr/features/Timer/Timer';
import {fontSizes, spacing} from './scr/utils/sizes';
import {FocusHistory} from './scr/features/focus/FocusHistory';

const STATUSES =  {
  COMPLETE : 1,
  CANCELED : 2,
}

export default function App() {
  const [subject, setSubject] = useState(null)
  const [focusHistory, setfocusHistory] = useState([])

const addFocusHistoryWithState = (subject, status) => {
  setfocusHistory([...focusHistory, {subject, status}])
}
  
  const onClear = () => {
    setfocusHistory([])
  }

  const SavaFocusHistory = async () => {
    try{
    await  AsyncStorage.setItem('FocusHistory', JSON.stringify(focusHistory))

    if(history && JSON.parse(history).length){
      setfocusHistory(JSON.parse(history))
    }
    } catch(e){
      Console.log(e)
    }
  }

  useEffect(()=>{
    SavaFocusHistory()
  },[focusHistory])

  const loadFocusHistory = async () => {
    try{
    const history  = await AsyncStorage.getItem("focusHistory")
    }catch(e){
       Console.log(e)
    }
  }

  useEffect(()=>{
     SavaFocusHistory()
  }, [focusHistory])

  return (
    <View style={styles.container}>
     {
       subject ?
       (
       <Timer subject={subject} onTimerEnd={()=>{
          addFocusHistoryWithState(subject, STATUSES.COMPLETE)
         setSubject(null)
       
       }} 
       clearSubject={()=>{
         addFocusHistoryWithState(subject, STATUSES.CANCELED)
         setSubject(null)}}
       />
       )
       :
       (
         <>
       <Focus addSubject={setSubject}/>
       <FocusHistory focusHistory={focusHistory} onClear={onClear} />
       </>
       )
     }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:spacing.md,
    backgroundColor:"#252250"
  },
});
