import React from 'react';
import {FlatList, View} from "react-native";

import Cabecalho from './components/Cabecalho';
import mock from '../../mocks/carrinho'


import Item from '../../screens/Carrinho/components/Item';
import Detalhes from '../../screens/Carrinho/components/Detalhes';
import Topo from '../../screens/Carrinho/components/Topo';
import Produtos from './components/Produtos';
import Rodape from './components/Rodape';

import antena3g from "../../../assets/Itens/antena2g3g.png";
import antenaWifi from "../../../assets/Itens/antenaWifi.png";
import modem from "../../../assets/Itens/modem.png";
import nodeMcu from "../../../assets/Itens/nodeMcu.png";


export default function Home() {
    return  <>
            <FlatList
                data = {mock.itensHome.lista}
                renderItem = {Item}
                keyExtractor = {({nome})=> nome}
                ListHeaderComponent = {
                    () => {
                        return <>
                                    <Cabecalho {...mock.cabecalho}/>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        
                                        <Produtos img={antena3g} preco='R$30,00'>Antena 2G/3G</Produtos>
                                        <Produtos img={antenaWifi} preco='R$50,00'>Antena WiFi</Produtos>
                                        
                                    </View>

                                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                        
                                        <Produtos img={modem} preco='R$40,00'>Modem</Produtos>
                                        <Produtos img={nodeMcu} preco='R$30,00'>Nome MCU</Produtos>
                                        
                                    </View>
                                   
                                </>
                    }
                }
                ListFooterComponent ={
                    () => {
                        return  <>
                                    <Rodape />
                                </>
                    }
                }
            />
            </>
}