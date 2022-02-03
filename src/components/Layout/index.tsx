import React from 'react'

import { Container } from './style'
import Header from '../Header'
import Main from '../Main'

const layout: React.FC = ({children}) => {
    return (
        <Container>
            <Header/>
            <Main> 
             {children}
            </Main>
        </Container>
    )
}

export default layout