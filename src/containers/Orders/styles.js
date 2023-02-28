import styled from "styled-components";


export const Container = styled.div`
    background: #0A0A10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`      
`;

export const ContainerItens = styled.div`
    padding: 25px 36px;
    display: flex;
    flex-direction: column;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 76px;
`;


    export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-top: 70px;
    background: rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: #FFFFFF;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;

export const CostumerContainer = styled.li`
    width: 342px;
    height: 101px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;   
    justify-content: space-between;
    align-items: center;
    margin-top: 18px;
    padding-left: 27px;
    padding-right: 15px;

    button {        
        width: 24px;
        height: 28px;        
        background: none;
        border: none;
        cursor: pointer;
        
        &:hover{
            opacity: 0.8;
        }

        &:active{
            opacity: 0.5;
        }
    };

    p{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`;

export const OrdersDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

gap: 15px;
`; 

