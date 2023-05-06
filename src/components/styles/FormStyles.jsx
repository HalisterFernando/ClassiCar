import styled from 'styled-components';

export const CardForm = styled.div`
    width: 300px;  

    h2 {
        font-family: 'Lobster', cursive;
        font-weight: 400;
        font-size: calc(36rem / 16);
        text-shadow: 1px 1px white;
    }  

    h4 {
        font-family: "Roboto", sans-serif;
        font-size: 1.2rem;
        margin: 8px 0;
        text-shadow: 1px 1px white;
    }
    
    textarea {
        width: 100%;
        height: 50px;  
    }

    input[type=text] {
        width: 270px;        
        border-radius: 5px;
        padding: 2px;
        width: 100%;
    }

    input[type=number] {
        width: 100px; 
    }

    select {
        border-radius: 5px;
        padding: 2px;
    }   

    input[type=checkbox] {
        margin-right: 8px;
    }
   
`;

export const AttributesContainer = styled.div`
    margin: 16px 0;

    label {
        display: flex;
        justify-content: space-between;
        margin: 8px 0;
        width: 100%;
    }

    span {
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: var(--19px);
        text-shadow: 1px 1px white;
    }
`;

export const CheckSuperTrunfo = styled.label`
    display: ${(props) => (props.isTrunfo ? 'none' : 'inline')};
    margin-left: 10px;
  
    span {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
    }
    
`;

export const SaveButton = styled.button`   
    border-radius: 5px;
    border: none;
    box-shadow: 0px 2px 2px white;
    padding: 5px 10px;
    margin-top: 10px;
    font-size: 1.1rem;
    font-family: "Roboto", sans-serif;
    background-color: ${(props) => {
    if (props.available) {
      return 'var(--white-fa)';
    }
    return 'var(--blue-green)';
  }};


`;

export const PlayButton = styled(SaveButton)`
    background-color: var(--blue-green);
    margin-left: 15px;
    transition: background-color 0.1s ease-in-out;
    pointer-events: visibleFill;
    &:hover {
      background-color: white;
      box-shadow: 0px 2px 2px var(--blue-green);
      
    }
`;
