import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import Texto from '../../../components/Texto';

import topo from '../../../../assets/topo.png'

export default function Topo ({titulo}) {
    return  <>
            <Image source={topo} style={estilos.topo}/>
            <Texto style={estilos.carrinho}>{titulo}</Texto>
            </>
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 582/772 * width,
    },

    carrinho:{
        position: 'absolute',
        padding: 50,
        textAlign: 'center',
        width: width,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 40,
        color: 'white',
    },
})