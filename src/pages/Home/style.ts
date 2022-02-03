import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    /*
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 10px;
    padding: 10px 25px;
    align-items: center;
    */
`
export const Column = styled.div`
    width: 50%;

    padding: 20px 0;
    font-size: 30px;
    
    > div{

        color: #fff;

        > p{            
            margin-top: 1em;
        }
    }
    > button{
        font-size: 1em;
        margin: 1em 0;
        padding: 0.25em 1em;
        border-radius: 45px;

        /* Color the border and text with theme.colors */
        color: #fff;
        background-color: #fe4e16;
        border: 2px solid #fe4e16;
    }
`