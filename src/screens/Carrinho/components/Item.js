import React from "react";
import Texto from "../../../components/Texto";
import {View, Image, StyleSheet} from 'react-native';




export default function Item ({item:{nome, imagem}}){

    return  <> 
            <View style={estilos.item}>
                <Image style ={estilos.imagem} source={imagem}/>
                <Texto style ={estilos.nome}>{nome}</Texto>
                
            </View>
            </>     
}


const estilos = StyleSheet.create({
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    item:{
        flexDirection:'row',
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    imagem:{
        width: 60,
        height: 60,
    },
    nome:{
        fontSize:16,
        marginLeft: 15,
    }
})