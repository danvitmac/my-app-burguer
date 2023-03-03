import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import BurguerEmb from '../../assets/burguer1.svg'
import Trash from '../../assets/trash.svg'

import { Container, H1, Image, ContainerItens, Button, CostumerContainer, OrdersDetails } from './styles'

const Orders = () => {

    // const newOrder = [];

    const [ costumer, setCostumer ] = useState([])
    const history = useHistory()
    
    
    useEffect(() => {
        async function fetchCostumers(){
            const { data: newCostumers } = await axios.get("https://api-register-orders.vercel.app/order")
        setCostumer(newCostumers)
        }
        
        fetchCostumers()
    }, [])

    async function deleteOrder(orderId){
        await axios.delete(`https://api-register-orders.vercel.app/order/${orderId}`)
        const newOrder = costumer.filter( order => order.id !== orderId);

        setCostumer(newOrder)
    }

    function goBackPage(){
        history.push('/')
    }

    return (
        <Container>
            <Image alt="imagem-embalagem-hamburguer" src={BurguerEmb} />
            <ContainerItens>
                <H1>Pedido</H1>

              
                
                <ul>
                    {costumer.map((order) => (
                        <CostumerContainer key={order.id}>
                           <OrdersDetails>
                            {order.order}
                            <p>{order.clientName}</p></OrdersDetails>
                            <button onClick={() => deleteOrder(order.id)}><img alt="lata-de-lixo" src={Trash} /></button>
                        </CostumerContainer>                   
                
                    ))}
                </ul>

                <Button onClick={goBackPage} >Voltar</Button>


            </ContainerItens>
        </Container>
    )
}

export default Orders;