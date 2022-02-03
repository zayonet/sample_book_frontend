import React from "react";

import { Container, Content } from './style'
import Logo from './Logo'
import Menu from './Menu'

const Headers: React.FC = () => {
    return (
        <Content>
            <Container>
                <Logo/>
                <Menu/>    
            </Container>
        </Content>
    )
}

export default Headers;