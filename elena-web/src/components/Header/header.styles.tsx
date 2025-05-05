import styled from "styled-components";
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer({
    // borderTop: '1px solid grey',
    paddingTop: '20px',
    paddingBottom: '20px',
    fontFamily: '"Typewriter", sans-serif',
    marginLeft: "40px",
    marginRight: "40px",
    textAlign: "left",
    lineHeight: "1.35",
    fontSize: "1.3rem",
    fontWeight: 400,
    fontStyle: "normal",
      //   display: "grid",
      // gridTemplateColumns: "20% 30% 46%", 
      position: 'absolute',
      top: '0',
      width: '97%',
//   "@media (min-width: 768px)": {
//       display: "grid",
//       gridTemplateColumns: "16% 30% 52%", 
//     },
});


export const StyledContainerFooterStart = styled(Link)`
    marginLeft: 0;
    display: flex;
    justifyContent: flex-start;
    text-decoration: none;
      color: white;

`

export const StyledContainerFooterEnd = styled.div({
  marginLeft: '0',
  display: 'flex',
  justifyContent: 'flex-end',
  color: 'white',
});