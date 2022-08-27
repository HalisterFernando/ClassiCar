import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #065653;
    border-top: 15px double white;   
    position: absolute;
    bottom: 0;
    width: 100%;
    

    div {
        display: flex;
        flex-direction: column;
        padding: 0 15px 0 15px;
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: 1rem;
        text-align: center;
        text-shadow: 0 1px 3px black;
    }    

    
`;

export const Links = styled.div`
    height: fit-content;
    nav {
        display: flex;
        gap: 30px;

        a {
            text-decoration: none;
            color: white;
            font-size: 2.5rem;
            filter: drop-shadow(2px 1px 1px black);
            &:hover {
                border-bottom: 1px solid white;
            }
        }
    }
   

`;
