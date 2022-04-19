import styled from "styled-components";

export const DonationHeading = styled.h1`    
    font-size: 3rem;
    margin-left: 35%;
`

export const FooterStyle = styled.div`
    background-color: lightcyan;    
    color: black;
    padding: 14px 46px;
    position: absolute;
    bottom: 10;
    width: 100%;
    height: 6rem;                  
`;

export const Head1 = styled.h1`
    font-family : Comic Sans MS;
    font-size: xx-large;
    justify-content: center;
    display: flex;
`;

export const Image = styled.img`
  width: 40%;
  justify-content: center;
  display: flex;
  margin-left: 22.5%;
`;

export const Searchbox = styled.input.attrs({type: 'text'})`
  width: 100px;
  margin: auto;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;  
  padding: 5px;
  transition: width 0.4s ease-in-out;
  &:focus {
      width: 200px;        
    }
`;

export const PageLeft = styled.div`  
  background-color: #FFFFE0;
  min-height: 100vh;
  height: 100%;
  width: 50%;  
  left: 10;
  align-items: center;
  align-content: center;
`;

export const EachDonation = styled.div`  
    font-size: 2rem;    
    justify-content: center;
    padding: 10px 0;
    margin-left: 22.5%;     
`;

export const AllDonations = styled.div`  
    font-size: 2rem;
    justify-content: center;
    padding: 50px 0; 
`;

export const PageRight = styled.div`
  background-color: lightcyan;
  min-height: 100vh;
  height: 100%;
  width: 50%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 5%;
`;

export const Form = styled.form`
  border: 0.2ch;
  border-color: black; 
  border-style: solid;
  width: 100%;
  max-width: 400px;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  /* right: 450px; */
  top: 150px;
  background-color: #FFFFE0;
  min-height: 50vh;
`;

export const Input = styled.input.attrs({type: 'text'})`
  border-radius: 3px;
  border: 1px solid black;
  width: 100%;
  outline: 0;
  padding: 12px 20px;  
  display: inline-block;
  font-size: 16px;
`;
export const Button = styled.input.attrs({type: 'submit'})`
  border: 1px solid black;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  border-radius: 12px;
  width: 50%;
  cursor: pointer;
  &:hover {
        background-color: lightcyan;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

export const Filter = styled.div`
    color: black;
    text-align: center;
    margin: auto;    
    width: 100%;
    padding: 10px;   
    font-size : 15;
`;

export const Error = styled.div` 
  color: red;
  font-size: 18px;
`;
