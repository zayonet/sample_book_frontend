import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
`
export const Column = styled.div`
    width: 50%;

    padding: 20px 0;
    font-size: 30px;
    
    > div{

        color: #fff;
        > h2{            
            color: #fff;
            text-transform: uppercase;
        }
        > p{            
            margin-top: 1em;
        }
    }
    > button{
        font-size: 1em;
        margin: 1em 0;
        padding: 0.25em 1em;
        border-radius: 45px;

        color: #fff;
        background-color: #fe4e16;
        border: 2px solid #fe4e16;
    }
`