import React from "react";
import topo from '../../../../assets/topo.png';
import { Image, StyleSheet, Dimensions } from "react-native";
import mock from '../../../mocks/carrinho';
import Texto from "../../../components/Texto";

export default function Rodape () {
    return (
            <>
             <Image source={topo} style={estilos.topo}/>
             <Texto style={estilos.titulo}>Obrigado por acessar meu App!</Texto>
            </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height:  '40%',
    },
    titulo:{
        position: 'absolute',
        padding: 50,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 40,
        color: 'white',
    },
})