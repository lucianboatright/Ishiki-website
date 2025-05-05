import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: black;
  color: white;
//   padding: 2rem;
margin-Left: 40px;
margin-right: 40px;
padding-Bottom: 120px;
  gap: 2rem;
`

export const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`

export const RightColumn = styled.div`
  flex: 2;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  justify-content: end;
  gap: 2rem;
  `
  
  export const StyledTitle = styled.h1`
  font-size: 5rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: white;
  margin: 0;
  `
  
  export const StyledText = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: #ccc;
  max-width: 60ch;
`