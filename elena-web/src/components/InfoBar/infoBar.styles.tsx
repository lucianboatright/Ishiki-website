import styled from "styled-components";

interface InfoBarColorProps {
    FirstColor?: string;
    SecondColor?: string; 
}

interface StyledContainerProps {
    BorderColor: string;
}

export const StyledContainer = styled.li<StyledContainerProps>((props) => ({
    display: "grid",
    gridTemplateColumns: "10% 50% 33%", 
    paddingTop: '1rem',
    height: 'auto',
    fontSize: '50px',
    color: 'white',
    marginLeft: '20px',
    marginRight: '20px',
    borderTop: `0.5px solid ${props.BorderColor}`,
}));


export const CircleLogo = styled.div<InfoBarColorProps>((props) => ({
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    fontSize: '20px',
    color: 'white',
    textAlign: 'center',
    paddingTop: '16px',
    marginTop: 'auto',
    marginBottom: 'auto',
    background: `linear-gradient(95deg,${props.FirstColor}, ${props.SecondColor})`,

}));
export const TitleContainer = styled.div({
    textTransform: 'uppercase',
    fontSize: '80px',
    letterSpacing: '0.05rem',
    fontWeight: '100',
    color: 'white',
    marginLeft: '10px',
    marginTop: 'auto',
    marginBottom: 'auto',
});

export const TextContainer = styled.div({
    fontSize: '40px',
    fontWeight: '10',
    color: 'white',
    marginLeft: '10px',
    marginTop: 'auto',
    marginBottom: 'auto',
});


