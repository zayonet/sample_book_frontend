import styled from "styled-components"

export const Container = styled.div`
    
    height: 200px;
    background: #fdc5b4;
    border-radius: 10px;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    outline: 0;

    > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

    > p {
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    border-radius: 10px;
    border: 1px dashed #fe4e16;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #333;
    }

    > p svg {
    color: #fe4e16;
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
    }
`