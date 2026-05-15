import React from 'react';
import {View, Text} from 'react-native';
type StudentProps={
    name:string;
    age:number;
}
export default function Student(props:StudentProps){
    return(
        <View>
            <Text>Name:Hello {props.name}</Text>
            {props.age && <Text>Your Age is: {props.age}</Text>}
        </View>
    )
    }
