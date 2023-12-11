import styled from 'styled-components'

export const AddButton = styled.button `
    background-color: #b75de1;
    color: #ffffff;
    font-weight: bold;
    height: 40px;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 10px;
    font-size: 19px;

    &:hover {
        opacity: 0.8;
    }

`

export const Container = styled.div `
    background: #4374dd;
    padding: 20px;
    border-radius: 20px;
    

    h1{
        color: #fff;
        font-weight: bold;
        margin-left: 15px;        
    }

    input {
        height: 40px;
        border-radius: 10px;
        border: none;
        margin-top: 30px;
        margin-right: 10px;
        outline: none;
        padding-left: 10px;
    }

    
`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    margin-top: 15px;
    padding: 0 10px;

    p {
        text-transform: capitalize;
        font-weight: bold;
    }

`

export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;

    
`