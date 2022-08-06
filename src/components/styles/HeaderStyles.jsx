import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #065653;
    margin: 0;
    padding: 2px 30px;
    height: 80px;
    border-bottom: 15px double white;

    h1 {
        font-size: 2.5rem;
        font-family: 'Lobster', cursive;
        font-weight: 300;
        color: white;
        text-shadow: 0 1px 3px black;        
    }

    button {
        background-color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 30px;
        font-family: "Roboto", sans-serif;
        font-size: 1.2rem;
        font-weight: bold;       
        box-shadow: 0 2px 2px black;
        transition: background-color 0.3s ease-in-out;
        &:hover {
            background-color: #aec8bf;
        }
    }
`;

export default HeaderContainer;
