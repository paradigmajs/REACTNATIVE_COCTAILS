import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Picker,Button, Alert, TextInput, FlatList} from 'react-native';

export default function Home({ navigation }) {

  const [value, onChangeText] = React.useState('');
  const [datas, setData] = React.useState([])
  const [selectedValue, setSelectedValue] = React.useState("All");

  React.useEffect(()=>{
    go()
  },[])
  async function go(){
      let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      let data = await resp.json()
     
      setData(data.drinks)
    }

    async function filterByName(val){
      if(val !== ''){
        let resp = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+val)
        let data = await resp.json()
        setData(data.drinks)
      }
      else{
        go()
      }
    }
    function search(val){
      let name = val
      let url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a='
      if(name=== 'Non_Alcoholic'){
        find(name, url)
      }else if(name === 'Alcoholic'){
        find(name, url)
      }else{
        go()
      }
    }
    async function find(name, url){
        let resp  = await fetch (url+name)
        let data = await resp.json()
        
        setData(data.drinks)
      }
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1,color:'#fff', width:200}}
        onChangeText={(text) => {
          onChangeText(text);
          filterByName(text)
          }
        }
        value={value}
      />
        <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200, backgroundColor:'#fff' }}
        onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue); search(itemValue)}}
      >
        <Picker.Item label="Non_Alcoholic" value="Non_Alcoholic" />
        <Picker.Item label="Alcoholic" value="Alcoholic" />
        <Picker.Item label="All" value="All" />
      </Picker>
      
      <FlatList
        data={datas}
        renderItem={({item})=>(
          <View style={styles.container} >
            <Image style={styles.img} source={{uri:item.strDrinkThumb}}/>
            <Text style={{color:'#fff'}}>{item.strDrink}</Text>
            <Button  onPress={() => navigation.navigate('Detail', { post: item.strDrink })} title="Подробнее"/>
          </View>
        )}
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#000',
    alignItems: 'center',
    
  },
  main:{
    color:'red',
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
