import React from 'react'
import { Footer } from '../../components/footer'
import { InfoBar } from '../../components/InfoBar/infoBar'
import { PageContainer } from './pitchDeck.styles'

export const PitchDeck: React.FC = () => {
  return (
    <>
    <PageContainer>
      <InfoBar Initial={'I'} Name={'intentional'} Text={'We approach filming with deep awarness and purpose.'} FirstColor={'black'} SecondColor={'grey'} BorderColor={'#3a3a3a'} />
      <InfoBar Initial={'S'} Name={'symbiotic'} Text={'We ensure technology and creativity grow together.'} FirstColor={'#0055ff'} SecondColor={'#4d77ff'} BorderColor={'#2953f4'} />
      <InfoBar Initial={'H'} Name={'honest'} Text={'We create with integrity, truth, and emotional depth.'} FirstColor={'rgb(73 48 141)'} SecondColor={'#bf40bf'} BorderColor={'#8f45b0'} />
      <InfoBar Initial={'I'} Name={'inclusive'} Text={'We welcome diverse voices and perspectives. We value our relationships.'} FirstColor={'rgb(214 54 122)'} SecondColor={'rgb(218 59 80)'} BorderColor={'#f34e7c'} />
      <InfoBar Initial={'K'} Name={'kind'} Text={'We work with care, respect, and empathy for people and the planet.'} FirstColor={'rgb(212 118 45)'} SecondColor={'rgb(244 213 107)'} BorderColor={'#f2b24c'} />
      <InfoBar Initial={'I'} Name={'impactful'} Text={'We create stories that challenge, inspire, and transform.'} FirstColor={'rgb(140 191 86)'} SecondColor={'rgb(101 174 87)'} BorderColor={'#48c774'} />
      <Footer />
    </PageContainer>
    </>
  )
}