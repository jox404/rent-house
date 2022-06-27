import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Near(props) {
    const priceFormated = `R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(props.price)}`
  return (
    <>
      <View style={styles.container}>
        <View>
            <Image source={props.cover} style={styles.cover}/>
        </View>
        <View style={styles.containerDescription}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.price}>{priceFormated}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container:{
       flexDirection:'row',
       marginHorizontal:15,
       paddingHorizontal:10,
       elevation:2,
       backgroundColor:'#fff',
       borderRadius:10,
       paddingVertical:10,
    },
    cover:{
        width:80,
        height: 80,
        backgroundColor:'#000',
        borderRadius:10
    },
    description:{
        fontFamily:'MontserratLight'
        ,fontSize:11,
        maxWidth:250,
        paddingVertical:10,paddingHorizontal:10,
    },
    price:{
        fontSize: 15,
        fontFamily: 'MontserratSemiBold',
        color: '#000',
        paddingHorizontal:10,
    }
})
