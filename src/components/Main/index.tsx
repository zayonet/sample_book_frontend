import React from 'react'

import { Content, Container } from './style'

const Main: React.FC = ({children}) => {
    return (
        <Content>
            <Container> {children} </Container>
        </Content>
    )
}

export default Main