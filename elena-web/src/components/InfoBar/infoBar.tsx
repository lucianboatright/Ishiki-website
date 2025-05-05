import React from 'react'
import { CircleLogo, StyledContainer, TextContainer, TitleContainer } from './infoBar.styles'


interface InfoBarProps {
    Initial: string,
    Name: string,
    Text: string,
    FirstColor: string,
    SecondColor: string,
    BorderColor: string,
}
  


export const InfoBar: React.FC<InfoBarProps> = ({Initial = 'A', Name = 'Intentional', Text = 'TEST text', FirstColor = 'orange', SecondColor = 'yellow', BorderColor = 'green'}) => {
  return (
    <StyledContainer BorderColor={BorderColor}>
            <CircleLogo FirstColor={FirstColor} SecondColor={SecondColor}>{Initial}</CircleLogo>
            <TitleContainer>{Name}</TitleContainer>
            <TextContainer>{Text}</TextContainer>
    </StyledContainer>
  )
}