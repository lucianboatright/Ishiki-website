import styled from "styled-components";

export const PageContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'black',
    color: 'white',
    paddingRight: '30px',
});


export const StyledContainer = styled.div({
    flex: 1,
    display: 'flex',
    alignItems: 'flex-end', 
    justifyContent: 'flex-start', 
    paddingBottom: '3rem',
    fontSize: '200px',
    color: 'white',
    marginLeft: '40px',
});
