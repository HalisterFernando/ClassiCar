import styled from 'styled-components';

export const CardForm = styled.div`
  width: 300px;    
  padding: 10px 25px 10px 10px;
  
  p {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-shadow: 1px 1px white;
  }
`;

export const NewCard = styled.h1`
    font-family: 'Lobster', cursive;
    font-weight: 400;
    text-shadow: 1px 1px white;

`;

export const LabelTitle = styled.h4`
font-family: "Roboto", sans-serif;
font-size: 1.2rem;
margin: 5px 0 5px 0;
text-shadow: 1px 1px white;
`;

export const Input = styled.input`
    width: 270px;        
    border-radius: 5px;
    padding: 2px;
`;

export const DescriptionContainer = styled.label`
    display: flex;
    flex-direction: column;
    
`;

export const Description = styled.textarea`
    width: 270px;
    height: 50px;   
    
`;

export const Attributes = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;        
    font-weight: 400;
    height: 40px;
    width: 277px;

    p {
        font-family: "Roboto", sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
    }
`;

export const InputContainer = styled.label`
    display: flex;
    gap: 5px;
    align-items: center;
    width: 306px;
    height: 28px;
    margin-bottom: 20px;
`;

export const InputAtt = styled(Input)`   
    width: 100px;    
`;

export const InputImg = styled(Input)`
    width: 194px;
`;

export const SelectRarity = styled.select`
    border-radius: 5px;
    padding: 2px;
`;

export const CheckSuperTrunfo = styled.label`
    display: ${(props) => (props.isTrunfo ? 'none' : 'inline')};
    margin-left: 10px;
    span {
        font-family: "Roboto", sans-serif;
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
      return '#fafafa';
    }
    return '#358680';
  }};


`;

export const PlayButton = styled(SaveButton)`
    background-color: #358680;
    margin-left: 15px;
    transition: background-color 0.1s ease-in-out;
    &:hover {
      background-color: white;
      box-shadow: 0px 2px 2px #358680;
    }
`;
