import styled from 'styled-components';

const SuperLogo = styled.div`    
    display: ${(props) => (props.isTrunfo ? 'flex' : 'none')};
    position: absolute;    
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid black;
    border-radius: 50%;
    top: 5px;
    left: 5px;
    color: white;
    width: 80px;
    height: 80px;
    z-index: 2;    
    
    div {        
        position: relative;
        border: 1px solid black;        
        background-color: var(--blue-green);
        border-radius: 50%;  
        width: 70px;
        height: 70px;

        span {
            position: absolute;
            top: 26px;
            left: -2px;
            color: black;
            font-size: calc(14rem / 16);            
            font-family: 'Lobster';
            background-color: var(--white-fa);
            transform: rotate(-18.92deg);
            width: 72px;
            border-radius: 1px;
            text-align: center;
        }       
    }
`;

export default SuperLogo;
