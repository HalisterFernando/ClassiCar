import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: space-between;
    height: 100vh;
   
`;

export const GameMainContainer = styled.div`
    display: flex;
    justify-content: space-between;    
    
`;

export const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;    
    padding: 0 40px;
`;

export const CardFlip = styled.div`
     position: relative;
     transform-style: preserve-3d;
     transition: transform 1s;
     width: 400px;
     transform: ${(props) => (props.next ? 'rotateY( 180deg )' : 'none')};
`;

export const CpuCard = styled.div`    
    backface-visibility: hidden;  
    transform: rotateY( 180deg ); 
`;

export const NextCard = styled.button`
    display: ${(props) => {
    if (props.endGame && props.next) return 'none';
    if (props.next) return 'block';
    return 'none';
  }};

`;

export const Result = styled.span`
    display: ${(props) => {
    if (props.next && props.endGame) return 'none';
    if (props.next) return 'block';
    return 'none';
  }};
    text-align: center;
    font-weight: 300;
    font-size: calc(40rem / 16);
    font-family: 'Lobster', cursive;
    text-shadow: 1px 1px white;
`;

// props.next ? 'block' : 'none'

export const Continue = styled.button`
    display: ${(props) => {
    if (props.next) return 'none';
    if (props.endGame) return 'none';
    return 'block';
  }};
`;

// props.next ? 'none' : 'block'
export const Select = styled.label`
    display: ${(props) => {
    if (props.next) return 'none';
    if (props.endGame) return 'none';
    return 'flex';
  }};
    flex-direction: column;
    width: 250px;
    justify-content: center;
    margin-top: 20px;
    
    select {
        padding: 5px;
        font-size: calc(18rem / 16);
        border-radius: 5px;
    }
   
`;

export const Setup = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: space-evenly ;
    margin-left: 30px;

    button {
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--blue-green);
        box-shadow: 0px 2px 2px white;
        font-size: calc(24rem / 16);
        font-family: 'Lobster', cursive;
        color: white;
        text-shadow: 1px 1px black;
    }

    h2 {
        text-align: center;
        font-weight: 300;
        font-size: calc(40rem / 16);
        font-family: 'Lobster', cursive;
        text-shadow: 1px 1px white;
    }

`;

export const Score = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    font-size: calc(28rem / 16);
    font-family: 'Lobster', cursive;
    text-shadow: 1px 1px white;
`;

export const Message = styled.span`
    text-align: center;
    font-weight: 300;
    font-size: calc(40rem / 16);
    font-family: 'Lobster', cursive;
    text-shadow: 1px 1px white;
`;

export const PlayAgain = styled.button`
        padding: 5px 10px;
        border-radius: 5px;
        border: none;
        background-color: var(--blue-green);
        box-shadow: 0px 2px 2px white;
        font-size: calc(24rem / 16);
        font-family: 'Lobster', cursive;
        color: white;
        text-shadow: 1px 1px black;
        display: ${(props) => (props.endGame ? 'block' : 'none')}
`;
