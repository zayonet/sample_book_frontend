import styled from "styled-components";

export const Container = styled.div``

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: row;
    
`;

export const MenuItemLink = styled.span`
    font-size: 18px;
    margin: 0 10px;
    
    .linkNavigator{
        color: #fe4e16;
        text-decoration: none;
   
        
        transition: opacity .3s;
        &:hover{
            opacity: 0.7;
        }
        > svg{
            color: #fe4e16;
            font-size: 18px;
            margin-right: 5px;
        }
        > img{
            width: 15px;
        }

    }
`;

export const Dropdown = styled.div`

    position: relative;
    display: inline-block;

    &:hover:hover .dropdown-content {
        display: block;
    }

    transition: opacity .3s;
    &:hover .dropbtn {
        opacity: 0.7;
    }

    .dropbtn {
        font-size: 18px;
        color: #fe4e16;        

        margin: 0 10px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 180px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {background-color: #f1f1f1}

`
