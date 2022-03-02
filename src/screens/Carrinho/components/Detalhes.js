import React from "react";
import {Image, StyleSheet, View, TouchableOpacity, Button} from 'react-native'
import Texto from "../../../components/Texto";
import logo from '../../../../assets/logo.png';

import mock from '../../../mocks/carrinho';


export default function Detalhes({titulo, nomeVendedor,  desc, preco, botao }){
    return <>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            <View style={estilos.vendedor}>
                <Image source={logo} style={estilos.logoVendedor} />
                <Texto style={estilos.nomeVendedor}>{nomeVendedor}</Texto>
            </View>
            <Texto style={estilos.desc}> {desc} </Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
            <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
                <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
            <Texto style={estilos.tituloItens}>{mock.itens.titulo}</Texto>
            </>
}



const estilos = StyleSheet.create({
    titulo:{
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 42,
    
    },
    tituloItens:{
        color: 'black',
        fontWeight: 'bold',
        fontSize:20,
    },
    
    desc: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: '#ffa500',
        fontSize: 30,
        lineHeight:42,
        marginTop:8,
        fontWeight: 'bold',
    },
    logoVendedor:{
        width:32,
        height:32,
        marginLeft:10,
    },
    nomeVendedor: {
        fontSize: 20,
        lineHeight: 42,
        marginLeft:10,

    },
    vendedor:{
        flexDirection:'row',
        paddingVertical:12,

    },

    botao:{
        marginTop: 16,
        backgroundColor: '#ffa500',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: 'bold',
    }
})
 