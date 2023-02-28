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
       margin-top: 11px;
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

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    padding-left: 17px;
`;


export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    padding: 17px;
    margin-bottom: 45px;
`;

    export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-top: 26px;
    background: #D93856;
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
