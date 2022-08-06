import styled from 'styled-components';

export const RulesContainer = styled.div`
    display: ${(props) => (props.rule ? 'block' : 'none')};
    position: absolute;  
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 100%;
    min-height: 100%;
    z-index: 200;

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2.0rem
    }

    h1, h2 {
        font-family: 'Lobster', cursive;
        font-weight: 300;
        color: white;
        text-shadow: 0 1px 3px black;
    }

    p {
        color: white;
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        text-shadow: 0 1px 3px black;
    }

`;

export const RulesInnerContainer = styled.div`    
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    z-index: 201;
    position: fixed;
    top: ${(props) => (props.rule ? '5px' : '50px')};
    left: ${(props) => (props.rule ? '0' : '23px')};    
    background-color: #065653;
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
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
    box-shadow: 0 2px 2px black;
    transition: background-color 0.3s ease-in-out;
    &:hover {
        background-color: #aec8bf;
    }
    
`;
