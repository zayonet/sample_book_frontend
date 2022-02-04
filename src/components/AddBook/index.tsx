import React, {useState} from "react"

import {Container, Button} from "./style"


import Modal from "../../components/Modal"


import {MdOutlineLibraryAdd} from "react-icons/md"
import useAuth from "../../hooks/auth"
import { Link } from "react-router-dom"
import { notification } from "antd"

const CardBook: React.FC = () => {
    
    const [modalShown, setModalShown] = useState(false);
    const { user, signIn, signOut } = useAuth()

    const buttonHandler = () => {
        setModalShown(!modalShown);
    };
    const messageHandler = () => {
        notification["error"]({
            message: 'Erro!',
            duration: 5,
            description:
                'Precisa fazer login antes!',
        });
        
    }
    return (
        <Container>
            <div>
                {modalShown &&  <Modal close={buttonHandler}/> }
            </div>
            <div className="card">
                <div className="button">
                    {
                        user ? 
                        <MdOutlineLibraryAdd onClick={buttonHandler} className="icon_btn"/>
                        :
                        <Link to="/sigin" onClick={messageHandler}> <MdOutlineLibraryAdd className="icon_btn" /> </Link>
                    }
                </div>
            </div>
        </Container>
    )
}

export default CardBook