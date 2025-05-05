import React from 'react'
import { FooterContainer, StyledContainerFooterStart } from './header.styles'



export const Header: React.FC = () => {
  return (
    <FooterContainer>
        <StyledContainerFooterStart to="/">
            <div>ISHIKI</div>
        </StyledContainerFooterStart>

    </FooterContainer>
  )
}