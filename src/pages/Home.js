import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import New from '../components/New';
import Near from '../components/Near';

export default function Home() {
    return (
        <ScrollView
            showVerticalScrollIndicator={false}
            style={{ backgroundcolor: '#fff' }}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather name='search' size={24} color='black' />
                    <TextInput
                        placeholder='O que está porcurando?'
                        style={styles.input}
                    />
                </View>
            </View>
            <Text style={styles.title}>Novidades</Text>
            <View style={styles.contentNew}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <New
                        cover={require('../assets/house1.jpg')}
                        name={'Casa de Praia'}
                        description={
                            'Sempre quis morar perto da Av. Paulista? Esta é a sua grande chance! Apartamento de 73m².'
                        }
                        price={3237}
                    />
                    <New
                        cover={require('../assets/house2.jpg')}
                        name={'Casa de Praia'}
                        description={
                            'Sempre quis morar perto da Av. Paulista? Esta é a sua grande chance! Apartamento de 73m².'
                        }
                        price={2600}
                    />
                    <New
                        cover={require('../assets/house3.jpg')}
                        name={'Casa de Praia'}
                        description={
                            'Sempre quis morar perto da Av. Paulista? Esta é a sua grande chance! Apartamento de 73m².'
                        }
                        price={5360}
                    />
                </ScrollView>
            </View>
            <Text style={styles.title}>Próximo de Você</Text>
            <View style={styles.nearContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Near price={4980} cover={require('../assets/house4.jpg')} description={'Sempre quis morar perto da Av. Paulista? Esta é a sua grande chance! Apartamento de 73m².'}/>
                    <Near price={3150} cover={require('../assets/house5.jpg')} description={'Sempre quis morar perto da Av. Paulista? Esta é a sua grande chance! Apartamento de 73m².'}/>
                </ScrollView>
            </View>
        </ScrollView>
    );
}

var styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 4,
    },
    input: {
        fontFamily: 'Montserrat',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '95%',
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        marginBottom:30,
    },
    nearContainer:{
        marginTop: 10,
        marginBottom:30,
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'MontserratSemiBold',
        fontSize: 18,
        color: '#4f4a4a',
    },
});
