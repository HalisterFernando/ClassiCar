import styled from 'styled-components';

export const SuperLogo = styled.span`    
    display: ${(props) => (props.isTrunfo ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    top: 42px;
    left: 5px;
    color: white;
    width: 70px;
    height: 70px;
    z-index: 2;    
    div {
        position: absolute;
        top: 5px;
        left: 5px;
        border: 1px solid black;        
        background-color: var(--blue-green);
        border-radius: 50%;  
        width: 60px;
        height: 60px;       
    }

`;

export const InnerText = styled.span`
    position: absolute;  
    display: flex ;
    align-items: center;
    justify-content: center;
    top: 24px;
    left: -2px;
    width: 62px;
    height: 12px;
    background-color: white;
    z-index: 50;
    transform: rotate(-18.92deg);

    p {
        color: black;
        font-size: 10px;
        padding-bottom: 1px;
        font-family: "Roboto", sans-serif;
    }
        
`;
