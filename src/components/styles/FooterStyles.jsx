import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--dark-green);
    border-top: 15px double white;       
    width: 100%;
    padding: 16px;    

    div {
        display: flex;
        flex-direction: column;
        padding: 0 15px 0 15px;
        font-family: 'Roboto', sans-serif;
        color: white;
        font-size: calc(16rem / 16);
        text-align: center;
        text-shadow: 0 1px 3px black;
    }       
`;

export const Links = styled.div` 
    scroll-behavior: smooth;
    transition-duration: 500ms;
    nav {
        display: flex;        
        gap: 30px;
        

        a {
            text-decoration: none;
            color: white;
            font-size: calc(40rem / 16);
            filter: drop-shadow(2px 1px 1px black);
            &:hover {
                color: black;
                filter: drop-shadow(2px 1px 1px white);
            }
        }
    }
   

`;
