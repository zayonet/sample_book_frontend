import styled from "styled-components";

export const Container = styled.div`    
    position: absolute;
    top: 50%;
    left: 50%;

    width: 800px;

    padding: 40px;

    transform: translate(-50%, -50%);
    background: rgb(0, 0, 0);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0,0,0,.6);

    border-radius: 10px;
    
    z-index: 1;
`

export const Title = styled.h2`
    margin: 0 0 30px;
    padding: 0;

    color: #fff;

    text-align: center;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    align-content: center;
    
`   
export const Column = styled.div`
    flex: 46%;
    margin-right: 10px;
    /* height: 300px; */ /* Should be removed. Only for demonstration */
`
export const InpuBox = styled.div`
    position: relative;
    
        > input {
            width: 100%;

            font-size: 16px;

            color: #fff;
            background: transparent;

            margin-bottom: 30px;
            padding: 10px 0;

            border: none;
            border-bottom: 1px solid #fff;
            outline: none;
            
        }
        > label {
            position: absolute;
            top:0;
            left: 0;
            padding: 10px 0;

            font-size: 16px;

            color: #fff;

            pointer-events: none;
            transition: .5s;
        }

        > input:focus ~ label, input:valid ~ label {
            top: -20px;
            left: 0;

            color: #fe4e16;

            font-size: 12px;
        }
`
export const SubmitButton = styled.button`
    min-width: 100px;
    padding: 8px 32px;

    border-radius: 4px;
    border: none;

    background: #fe4e16;
    color: #fff;

    font-size: 18px;
    cursor: pointer;
`

export const CloseButton = styled.button`
    min-width: 100px;

    margin: 0 10px;
    padding: 8px 32px;

    border-radius: 4px;
    border: none;

    background: #242525;

    color: #fff;
    font-size: 18px;
    cursor: pointer;

`