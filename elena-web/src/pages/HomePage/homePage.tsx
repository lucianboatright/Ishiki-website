import React from 'react'
import { Footer } from '../../components/footer'
import { ReviewVideo } from '../../components/Iframe/iframe'
import { PageContainer, StyledContainer } from './homePage.styles'



export const HomePage: React.FC = () => {
  return (
    <>
      <PageContainer>
        <ReviewVideo />
        <StyledContainer>ISHIKI</StyledContainer>
        <Footer />
      </PageContainer>
    </>
  )
}