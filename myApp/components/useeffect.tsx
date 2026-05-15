import React, {useState,useEffect} from 'react';
import {View , Text, Button} from 'react-native';
export default function Change(){
    const[count,setCount]=useState(0);
    const[effect,sideEffect]=useState('');
    useEffect(()=>{
        if(count===0)
        {
            sideEffect('No button has been clicked');
        }
        else if(count%2===0)
        {
            sideEffect('It is an even number');
        }
        else{
            sideEffect('It is an odd number');
        }
    },[count]);
    return(
        <View>
            <Button title='click me' onPress={()=>setCount(count+1)}></Button>
            <Text>Count:{count}</Text>
            <Text>Message:{effect}</Text>
        </View>
    )

}