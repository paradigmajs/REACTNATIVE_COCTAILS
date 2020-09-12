import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Picker,Button, Alert, TextInput, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detail({navigation, route}) {
  const [datas, setData] = React.useState([])   
  React.useEffect(() => {
    go()
  }, [route.params?.post]);

  async function go(val){
      let name = route.params?.post
      let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
      let data = await resp.json()
     
      setData(data.drinks[0])
    }

    
  return (
    <ScrollView style={styles.container}>
      
      
      <Text style={{marginTop:15, color:'#fff', fontSize:25}}>{datas.strDrink}</Text>
      <Image style={styles.img} source={{uri:datas.strDrinkThumb}}/>
      <Text style={{marginTop:15, color:'#fff', fontSize:25}}>{datas.strInstructions}</Text>
      <Text style={{marginTop:15, color:'#fff', fontSize:30}}>IGRIDIENTS</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strIngredient1}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strIngredient2}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strIngredient3}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strIngredient4}</Text>
      <Text style={{marginTop:15, color:'#fff', fontSize:30}}>Measure</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strMeasure1}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strMeasure2}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strMeasure3}</Text>
      <Text style={{marginTop:10, color:'#fff', fontSize:20}}>{datas.strMeasure4}</Text>
    
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    
  },
  
  hub:{
    color:'#5ab251',
    fontSize:40,
    marginTop:35,
   },
   img:{
     width:350,
     height:250,
     marginTop:15,
   }
});
