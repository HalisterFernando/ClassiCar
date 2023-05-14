import styled from 'styled-components';

export const BackCardFrame = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 368px;
  height: 549px;
  background: var(--white-fa);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;   
  backface-visibility: hidden;
`;

export const BackInnerFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 348px;
  height: 529px;
  background: var(--blue-green);
  border-radius: 10px;
  border: 1px solid var(--card-border);

    div {
      display: flex;
      align-items: center;
      justify-content: center;      
      background-color: white;
      border-radius: 50%;
      border: 2px solid black;
      width: 280px;
      height: 280px;

        span {
          display: flex;
          align-items: center;
          justify-content: center; 
          background-color: var(--dark-green);
          width: 250px;
          height: 250px;          
          border-radius: 50%;
          border: 2px solid black;
          font-family: 'Lobster';
          font-size:calc(58rem / 16);
          color: var(--white-fa);
          text-shadow: 0 1px 3px black;          
        }
    }
`;
