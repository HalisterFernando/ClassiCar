import styled from 'styled-components';

export const RulesContainer = styled.div`
    display: ${(props) => (props.rule ? 'block' : 'none')};
    position: absolute;  
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200;    

    h1 {
        font-size: calc(48rem / 16);
    }

    h2 {
        font-size: calc(36rem / 16);
    }

    h1, h2 {
        font-family: 'Lobster', cursive;
        font-weight: 300;
        color: white;
        text-shadow: 0 1px 3px black;
        margin: 8px 0;
    }

    p {
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: calc(26rem / 16);
        text-shadow: 0 1px 3px black;
    }

`;

export const RulesInnerContainer = styled.div`    
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    z-index: 201;
    position: fixed;
    width: 800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);       
    background-color: var(--dark-green);
    text-align: center;
    padding: 5px 25px;
    border-radius: 5px;
    border: 10px double white;
    animation-name: show;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    

    @keyframes show {
        0%   {opacity: 0.2}  
        25%  {opacity: 0.4}    
        50%  {opacity: 0.6}
        75%  {opacity: 0.8}
        100% {opacity: 1}
    }

`;

export const OkBtn = styled.button`
    background-color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 55px;
    font-family: "Roboto", sans-serif;
    font-size: calc(24rem / 16);
    font-weight: bold;
    margin: 16px 0;
    box-shadow: 0 2px 2px black;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #aec8bf;
    }
    
`;
