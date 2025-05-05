import { Footer } from '../../components/footer'
import { LeftColumn, PageWrapper, RightColumn, StyledText, StyledTitle } from './bioPage.styles'

export const BioPage: React.FC = () => {
  return (

        <>
    <PageWrapper>
      <LeftColumn>
        <StyledTitle>BIO</StyledTitle>
      </LeftColumn>
      <RightColumn>
        <StyledText>
          Ishiki is a film studio rooted in ‘awareness’—of the world, of people, and of the quiet shifts shaping our future. 
          We tell stories that embrace complexity with honesty and depth, moving beyond fear-driven narratives to explore what it means to be human.
        </StyledText>
        <StyledText>
          For us, filmmaking is an interconnected process—what happens behind the camera shapes the stories we tell, the conversations they spark, 
          and the change they inspire. Through ethical practices, collaboration, and creative experimentation, we create space for authentic expression. 
          We embrace both tradition and technology, ensuring that emerging tools serve humanity rather than replace it. 
          Ishiki isn’t just about introspection; it’s a space to play, discover, and push the boundaries of storytelling.
        </StyledText>
      </RightColumn>
    </PageWrapper>
          <Footer />
        </>
  )
}
