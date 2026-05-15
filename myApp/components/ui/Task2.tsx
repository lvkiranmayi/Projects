import React,{useState} from 'react';
import {View,Text,TextInput,Button,FlatList}from 'react-native';
export default function AddedItems(){
    const[items,setItems]=React.useState<string[]>(['Milk','Bread','Eggs']);
    
    const handleAdd=()=>{
        setItems([...items,"New Item"]);
    } 
    return(
        <View>
            <Button title ="Add Item" onPress={handleAdd} />

            <FlatList
                data={items}
                keyExtractor={(items,index)=>index.toString()}
                renderItem={({item})=><Text>{item}</Text>}
                />
            
        </View>
    )
}
