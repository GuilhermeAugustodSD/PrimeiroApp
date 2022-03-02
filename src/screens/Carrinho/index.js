import React from 'react';
import {FlatList } from "react-native";



import Detalhes from './components/Detalhes';
import Topo from './components/Topo';
import Item from './components/Item';
import mock from '../../mocks/carrinho';

export default function Carrinho() {

   return  <>
            
            <FlatList
                data = {mock.itens.lista}
                renderItem = {Item}
                keyExtractor = {({nome})=> nome}
                ListHeaderComponent = {
                    () => {
                        return <>
                                    <Topo {...mock.topo}/>
                                    <Detalhes {...mock.detalhes}/>
                                    
                                </>
                    }
                }
            />
            </>
}



