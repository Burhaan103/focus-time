import React, {useState} from 'react';

import {Text, View, StyleSheet, Vibration, Platform } from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {colors} from '../../utils/colors';
import {fontSizes, spacing} from '../../utils/sizes';
import {Countdown} from '../../component/Countdown';
import {RoundedButton} from '../../component/RoundedButton';
import {Timing} from './Timing';
import {useKeepAwake} from 'expo-keep-awake';

const DEFAULT_TIME = 0.1;
export const Timer = ({subject, onTimerEnd, clearSubject}) => {
  useKeepAwake()

  const [minutes, setminutes] = useState(DEFAULT_TIME)
  const [started, setstarted] = useState(false)
  const [progress, setProgress] = useState(1)
  const onProgress = (progress) => {
    setProgress(progress)
  }

   const Vibrate = () => {
     if(Platform === "ios"){
       const interval = setInterval(()=> Vibration.vibrate(), 1000 );
       setTimeout(()=> clearInterval(interval), 1000)
     }else{
       Vibration.vibrate(10000)
     }
   }

  const onEnd = () => {
    vibrate();
     setminutes(DEFAULT_TIME)
    setProgress(1)
    setstarted(false)
    onTimerEnd();
  }
  const ChangeTime = (min) => {
    setminutes(min)
    setProgress(1)
    setstarted(false)
  }
  return(
    <View style={style.container}>
    <View style={style.countdown}>
     <Countdown minutes={minutes} isPaused={!started} onProgress={onProgress} onEnd={onEnd}/>

     </View>
  <View style={{paddingTop:spacing.xxl}}>
    <Text style={style.title} >We are focing on :</Text>
    <Text style={style.task} >{subject}</Text>

  </View>
  <View style={{paddingTop:spacing.sm}}>
  <ProgressBar 
  progressBar={progress}
  color="#5E84E2"
  style={{height:10}}
   />
   </View>
<View style={style.buttonWrapper}>
<Timing onChangeTime={ChangeTime} />
</View>

  <View style={style.button}>
    {
      started ? 
        <RoundedButton title="paused"  onPresed={() => setstarted(false)} />
      :
   <RoundedButton title="Start"  onPresed={() => setstarted(true)} />
    
    }
  
    </View>
      <View style={style.clearSubject}>
    <RoundedButton title="-" size={50} onPresed={() => clearSubject()} />
    </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
  },

title:{
  color:colors.white,
  textAlign:'center',
},
button:{
  flex:0.3,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  padding:15,
},
clearSubject:{
  paddingBottom:25,
  paddingLeft:25,
},
task:{
  fontFamily:'bold',
  textAlign:'center',
  color:colors.white,
},

countdown:{
  flex:0.5,
  alignItems:'center',
  justifyContent:'center',

},

})