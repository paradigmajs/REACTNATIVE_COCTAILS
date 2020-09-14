import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Picker,Button, Alert, TextInput, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Ingridient({navigation, route}) {
  const [datas, setData] = React.useState([])   
  React.useEffect(() => {
    go()
  }, [route.params?.name]);

  async function go(){
      let name = route.params?.name
      let resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + name)
      let data = await resp.json()
     
      setData(data.ingredients[0])
    }

    
  return (
    <ScrollView style={styles.container}>
        <Text style={{fontSize:36, color:'#fff', textAlign:'center'}}>{datas.strIngredient}</Text>
        <Text style={{fontSize:20, color:'#fff'}}>
        {datas.strDescription ?
                        datas.strDescription : "Information undefined"
                    }
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123',
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
