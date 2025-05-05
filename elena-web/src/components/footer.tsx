import React from 'react'
import { FooterContainer, StyledContainerFooterStart, StyledContainerFooterEnd } from './Footer/footer.styles'



export const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <StyledContainerFooterStart to="/BioPage">
            <div>ISHIKISTUDIOS</div>
        </StyledContainerFooterStart>
        <StyledContainerFooterStart to="/PitchDeck">
            <div>PITCHDECK</div>
        </StyledContainerFooterStart>
        <StyledContainerFooterEnd style={{paddingBottom: '1rem'}}>©2025</StyledContainerFooterEnd>
    </FooterContainer>
  )
}