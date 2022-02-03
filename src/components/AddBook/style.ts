import styled from "styled-components"

export const Container = styled.div`
    align-self: stretch;
    .card {
        display:flex;
        align-items: center;
        justify-content: center;
        /* position: relative; */
        width: 250px!important;
        height: 320px;
        margin: 25px 20px;

        border: 2px solid #fff;
        border-radius: 10px;
        
        .icon_btn{
            font-size: 48px;
            cursor: pointer;

            color: #fff;

            &:hover{
                color: #fe4e16;
            }
        }
    }
`
export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;