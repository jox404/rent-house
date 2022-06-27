import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export default function New(props) {
    var priceFormated = `R$ ${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(props.price)}`
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Image source={props.cover} style={styles.cover} />
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={styles.containerPriceAndIcon}>
                <Text style={styles.price}>{priceFormated}</Text>
                <Text><AntDesign name='pluscircle' style={styles.plusIcon} /></Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 300,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginHorizontal: 15,
    },
    cover: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginTop: 10
    },
    name: {
        fontSize: 15,
        fontFamily: 'MontserratSemiBold',
        color: '#4f4a4a',
        marginTop: 10
    },
    description: {
        fontSize: 12,
        fontFamily: 'MontserratLight',
        color: '#000',
        marginTop: 10
    },
    containerPriceAndIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 30,
    },
    price: {
        fontSize: 15,
        fontFamily: 'MontserratSemiBold',
        color: '#000',
    },
    plusIcon: {
        fontSize: 23,
        color: '#000',
    }
})