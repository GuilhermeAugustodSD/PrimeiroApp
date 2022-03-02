import React from "react";
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import Texto from "../../../components/Texto";

import mock from '../../../mocks/carrinho';

export default function Produtos(props){

    return(
           
        <TouchableOpacity style={estilos.container}>
            <Image source={props.img} style={estilos.imagem}/>
            <Text style={estilos.desc}>{props.children }</Text>
            <View opacity={0.4}>
                <Text style={estilos.desc}>{props.preco}</Text>
            </View>
       </TouchableOpacity>         
    )
}


const estilos = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 175,
        height: 175,
    },
    desc:{
        fontSize: 16
    }
})