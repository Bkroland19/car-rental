import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

import carLogo from '../../../assets/images/car-logo.png'


const LogoContainer = styled.div`
${tw` flex items-center space-x-4`}
`


const LogoText = styled.div`
${tw` text-xl md:text-2xl font-bold text-black`}
`

const Image = styled.div`
width: auto;
img {
    width:auto;
    height:100%;
}
${tw`h-6 md:h-9`}
`

export default function Logo() {
  return (
    <LogoContainer>
        <Image>

            <img src={carLogo} alt="car-logo"/>
        </Image>
        <LogoText>
            Bk's Car House 
        </LogoText>
    </LogoContainer>
  )
}

