import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Search = styled.h2`
    font-family: 'Lobster', cursive;
    font-weight: 400;
    font-size: 2.5rem;
    text-shadow: 2px 2px white;
`;

export const SearchLabel = styled.label`
    display: flex;
    flex-direction: column;
    justify-items: center;

    input {
      padding: 5px;
      border-radius: 5px;
    }
`;

export const Options = styled.div`
  display: flex ;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
 
  p {
    margin-right: 10px;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 1px 1px white;
  }

  select {
    padding: 3px;
    border-radius: 5px;
  }

  input[type="checkbox"] {
    transform: scale(1.5)
  }
`;

export const DisplayCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 15px;
    padding-bottom: 200px;
`;

export const DeleteButton = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding: 5px 10px;
    background-color: #358680;
    border: none;
    box-shadow: 0px 2px 2px white;
    border-radius: 5px;
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    transition: background-color 0.1s ease-in-out;
   
    &:hover {
      background-color: white;
      box-shadow: 0px 2px 2px #358680;
    }
`;
