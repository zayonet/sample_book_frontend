import styled from "styled-components"

export const Container = styled.div`
    align-self: stretch;
    .card {
        align-self: stretch;
        /* position: relative; */
        max-width: 250px!important;
        margin: 25px 20px;
        border-radius: 10px;
        
        .more_icon{
            position: relative;
            margin: 10px;
            float: right!important;

            font-size: 25px;
            cursor: pointer;


            border: 1px solid #fe4e16;
            border-radius: 50%;
        }
        > img{
            width: 100%!important;
            height: 320px;
            object-fit: cover;

            margin-top: -45px;
            border-radius: 10px;
        }
        > img:hover{
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
        }

        >h3{
            color: #fff;
            margin: 8px 0;
        }

        .author {
            color: grey;
            font-size: 15px;
        }
        .card-footer{
            text-align: center;
            
            > button{
                font-size: 1em;

                margin: 1em 0;
                padding: 0.5em 2em;
                border-radius: 45px;

                color: #fff;
                background-color: #fe4e16;
                border: 2px solid #fe4e16;
            }
            > button:hover{box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5)};

        }
    }

    
`