import styled from "styled-components";

export const Page_Left = styled.div`  
  background-color: #FFFFE0;
  min-height: 100vh;
  height: 100%;
  width: 50%;  
  left: 0;
  align-items: center;
  align-content: center;
`;

export const Page_Right = styled.div`
  background-color: lightcyan;
  min-height: 100vh;
  height: 100%;
  width: 50%;
  position: fixed;
  top: 0;
  right: 0;
  padding: 5%;
`;

export const Head = styled.h1`
    color: black;        
    width: 100%;    
    margin-left: 18%;     
    font-size: 50px;
    font-family: Comic Sans MS;
`;

export const Image = styled.img`
  padding: 40px;
  width: 50%;
`

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

export const Password = styled.input.attrs({type: 'Password'})`
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

export const Error = styled.div` 
  color: red;
  font-size: 18px;
`