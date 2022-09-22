import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native'; 
import {Feather} from '@expo/vector-icons'

export default function Inicio({nome}){
    return (
        <View style ={estilo.container}>
            <Text style={estilo.textoBoasVindas}>{nome}, seja Bem Vindo!</Text>
            <TouchableOpacity style={estilo.botaoPrincipal}>
                <Text style={estilo.textoBotao} >Abrir APP</Text>
            </TouchableOpacity>
            <Button title=''>
                <Feather name="file" size="20" color="white"></Feather>
            </Button>
            <View style={estilo.containerSB}>
                <Text style={estilo.textoCSB}>Item</Text>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: 'silver',
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
       
    },
    textoBoasVindas: {
        fontSize: 30,
    },      
    botaoPrincipal: {
        marginTop: 12,
        width: 155,
        height: 60,
        backgroundColor: "pink",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginBottom: 20
    },
    textoBotao: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
    },
    containerSB: {
        justifyContent: "space-between",
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
    },
    textoCSB: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',

    }

})