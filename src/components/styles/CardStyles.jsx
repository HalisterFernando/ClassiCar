import styled from 'styled-components';

export const CardFrame = styled.div`
  position: relative;
  width: 368px;
  height: 549px;
  background: var(--white-fa);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;  
`;

export const InnerFrame = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 348px;
  height: 529px;
  background: var(--blue-green);
  border-radius: 10px;
  border: 1px solid var(--card-border);
`;

export const Image = styled.div`
  position: absolute;
  width: 317px;
  height: 218px;
  left: 14.5px;
  top: 50px;  
  border: 1px solid var(--card-border);  

  img {
      position: absolute;      
      height: 100%;
      width: 100%;
      object-fit: fill;           
  }
`;

export const Title = styled.div`    
    display: flex;
    align-items: center;
    width: 317px;
    height: 40px;
    margin: 10px auto;    
    background: var(--dark-green);
    border-radius: 10px 10px 0px 0px;
    border: 1px solid #1e130d;
    padding: 0 10px 0 10px;
    

    span {      
      font-family: 'Lobster', cursive;
      font-size: 1.8rem;
      font-weight: 400;
      color: white;
      text-shadow: 2px 2px 5px black;
    }
`;

export const Description = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 317px;
    height: 55px;
    top: 269px;
    left: 14px;
    padding: 5px 8px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    line-height: 13px;
    background-color: var(--blue-green);        

    span {
      color: var(--white-fa);
      font-size: 14px;
      line-height: normal;
      text-align: justify;
      overflow-wrap: break-word;
      word-wrap: break-word;
      width: 300px;      
      text-shadow: 1px 1px 1px black;      
      height: 100%;
    }

`;

export const CardAttributes = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 317px;
    height: 190px;
    padding-right: 15px;
    box-sizing: border-box;
    left: 14px;
    top: 325px;
    background: #aec8bf;
    border: 1px solid #1e130d;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    gap: 10px;
`;

export const Attributes = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;  
  align-items: center;
  width: 250px;
  height: 50px;
  border-radius: 100px;
  background-color: var(--dark-green);
  border: 1.5px solid var(--white-fa);

    div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 2px;
      top: 1px;
      background-color: var(--white-fa);
      border-radius: 50%;
      width: 45px;
      height: 45px;
    }
  
    img {
      width: 30px
    }

    span {
      position: absolute;
      display: flex;
      justify-content: space-between;
      border-radius: 15px;
      height: 30px;
      width: 180px;
      right: 0;
      text-align: center;
      line-height: 30px;
      font-family: "Roboto", sans-serif;      
      padding: 0 8px;
      background-color: var(--white-fa);
      margin-right: 8px;     
    }
`;

export const CardRarity = styled.div`
    position: absolute ;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 13px;
    right: 25px;
    width: 35px;
    height: 35px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${(props) => {
    if (props.rarity) {
      const { raro, muitoRaro } = props.rarity;
      if (raro) return 'silver';
      if (muitoRaro) return 'gold';
      return '#F3F3F3';
    }
  }};
    img {
      width: 25px;
    }

`;

export const License = styled.a`
  position: absolute;
  bottom: 10px;
  left: 25px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: black;
  font-size:calc(12rem / 16) ;
`;
