import React, {useState} from "react"

import {Container, Button} from "./style"

//import bookImg from "../../assets/books/book1.jpeg"

import Modal from "../../components/Modal"


import {MdOutlineLibraryAdd} from "react-icons/md"

const CardBook: React.FC = () => {
    
    const [modalShown, setModalShown] = useState(false);

    // This function is triggered when the button is clicked
    const buttonHandler = () => {
        setModalShown(!modalShown);
    };
    return (
        <Container>
            <div>
                {modalShown &&  <Modal close={buttonHandler}/> }
            </div>
            <div className="card">
                <div className="button">
                    <MdOutlineLibraryAdd onClick={buttonHandler} className="icon_btn"/>
                </div>
            </div>
        </Container>
    )
}

export default CardBook