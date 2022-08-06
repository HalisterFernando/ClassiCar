import styled from 'styled-components';

export const CardFrame = styled.div`
position: relative;
width: 368px;
height: 549px;
background: #fafafa;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`;

export const InnerFrame = styled.div`
position: absolute;
top: 10px;
left: 10px;
width: 348px;
height: 529px;
background: #358680;
border-radius: 10px;
border: 1px solid #1e130d;
`;

export const ImageFrame = styled.div`
border-radius: 10px;
position: absolute;
width: 317px;
height: 238px;
left: 14px;
top: 12px;



div {
position: absolute;
display: flex;
align-items: center;
width: 317px;
height: 40px;
left: 0;
top: 0;
z-index: 1;
background: #065653;
border-radius: 10px 10px 0px 0px;
border: 1px solid #1e130d;
padding: 0 10px 0 10px;
box-sizing: border-box;
}

p {
  font-family: 'Lobster', cursive;
  font-size: 1.8rem;
  font-weight: 400;
  color: white;
  text-shadow: 2px 2px 5px black;
}

img {
    position: absolute;
    top: 30px;
    height: 100%;
    width: 100%;
    object-fit: fill;       
   
}
`;

export const Description = styled.div`
position: absolute;
display: flex;
align-items: center;
width: 317px;
height: 60px;
top: 255px;
left: 14px;
padding: 5px 8px 5px 8px;
box-sizing: border-box;
font-family: "Roboto", sans-serif;
font-size: 18px;
line-height: 13px;
background-color: #358680;
border-bottom: 1px solid #1e130d;
z-index: 1;

span {
  color: #fafafa;
  font-size: 14px;
  line-height: normal;
  text-align: justify;
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 300px;
  text-shadow: 1px 1px 1px black;
}

`;

export const CardAttributes = styled.div`
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 317px;
height: 197.5px;
padding-right: 15px;
box-sizing: border-box;
left: 14px;
top: 300px;
background: #aec8bf;
border: 1px solid #1e130d;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
`;

export const Attributes = styled.div`
  display: flex;
  justify-content: space-between;  
  align-items: center;
  width: 250px;
  height: 50px;
  padding-top: 10px;
`;

export const AttributeName = styled.span`
background-color: #358680;
border-top-left-radius: 15px;
border-bottom-left-radius: 15px;
height: 30px;
width: 120px;
text-align: center;
line-height: 30px;
font-family: "Roboto", sans-serif;
`;

export const AttributeValue = styled.span`
  position: relative;
  width: 40px;
  display: flex;
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: space-between;
  height: 30px;
  width: 130px;
  line-height: 30px;
  padding-left: 30px;
  text-align: right;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  span {
    position: absolute;
    left: 70px;
    width: 60px;
    text-align: center;
    box-sizing: border-box;
    background-color: #358680;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    font-family: "Roboto", sans-serif;
  }
`;

export const CardRarity = styled.span`
    position: absolute ;
    top:3px;
    left: 280px;
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    background-color: ${(props) => {
    if (props.rarity) {
      const { raro, muitoRaro } = props.rarity;
      if (raro) return '#C1D6E8';
      if (muitoRaro) return '#659DD4';
      return '#F3F3F3';
    }
  }};
`;

export const License = styled.a`
  position: absolute;
  left: 30px;
  top: 515px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  color: black
  
`;
