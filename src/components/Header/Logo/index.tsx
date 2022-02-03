import React from 'react'

import { Container } from './style'
import logos from '../../../assets/logo.png'

const Logo: React.FC = () => {
    return (
        <Container>
            <img src={logos} alt='logo'/>
        </Container>
    )
}

export default Logo