import logo from "../../assets/logo.png";
// imagens dos itens
import antena3g from "../../assets/Itens/antena2g3g.png";
import antenaWifi from "../../assets/Itens/antenaWifi.png";
import modem from "../../assets/Itens/modem.png";
import nodeMcu from "../../assets/Itens/nodeMcu.png";

const carrinho = {
    topo:{
        titulo: "Detalhes do Carrinho",
    },
    detalhes:{
        titulo: "Kit IOT",
        nomeVendedor: "Cloud Shopping",
        logoVendedor: logo,
        desc: "m kit de bla bal blalbalblalblabla bal",
        preco: "R$ 150,00",
        botao: "Comprar",
    },
    itens:{
        titulo:'Itens no Carrinho: ',
        lista:[
            {
                nome:'Antena 2g/3g',
                imagem: antena3g,
            },
            {
                nome:'Antena Wifi',
                imagem: antenaWifi,
            },
            {
                nome:'Modem',
                imagem: modem,
            },
            {
                nome:'Node MCU',
                imagem: nodeMcu,
                
            },
        ],
    },
    itensHome:{
        titulo:'Cloud Shopping',
        lista:[
            {
                nome:'Anasdtena 2g/3g',
                imagem: antena3g,
                preco: 'R$30,00',
            },
            {
                nome:'Antenasda Wifi',
                imagem: antenaWifi,
                preco: 'R$30,00',
            },
            {
                nome:'Modadem',
                imagem: modem,
                preco: 'R$30,00',
            },
            {
                nome:'Nodead MCU',
                imagem: nodeMcu,
                preco: 'R$30,00',
            },
        ],
    }
}

export default carrinho;