import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Burguer from '../../assets/burguer.svg'

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button } from './styles'

const App = () => {

    // const newOrder = [];

    const [ costumer, setCostumer ] = useState([])
    const history = useHistory()
    const order = useRef()
    const clientName = useRef()

    async function addNewOrder(){

        const { data: newCostumer } = await axios.post("http://localhost:3001/order", { 
            order:order.current.value, clientName:clientName.current.value,});        
        
        setCostumer([...costumer, newCostumer])

        history.push('/orders')
    }


    return (
        <Container>
            <Image alt="imagem-hamburguer" src={Burguer} />
            <ContainerItens>
                <H1>Faça seu pedido!</H1>

                <InputLabel>Pedido</InputLabel>
                <Input ref={order} placeholder="Digite seu pedido" />

                <InputLabel>Nome do Cliente</InputLabel>
                <Input ref={clientName} placeholder="Digite seu nome" />

                <Button onClick={addNewOrder}>Novo Pedido</Button>

                
            </ContainerItens>
        </Container>
    )
}

export default App