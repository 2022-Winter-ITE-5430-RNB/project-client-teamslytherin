import styled from "styled-components";

export const FormStyle = styled.form`
    width: 100%;
    background: #FFFFE0; 
    padding: 100px;
    display: auto;
    align-items: center;    
    min-height: 100vh;
`

export const Head = styled.h1`
    color: black;        
    width: 60%;
    padding: 10px;    
`;

export const PetCategory = styled.select`
  
  border-radius: 3px;
  border: 1px solid black;
  width: 25%;  
  padding: 12px 20px;  
  display: inline-block;
  font-size: 16px;
`;

export const InputText = styled.input.attrs({type: 'text'})`
  
  border-radius: 3px;
  border: 1px solid black;
  width: 25%;
  padding: 12px 20px;  
  display: inline-block;
  font-size: 16px;
`;

export const InputTextArea = styled.textarea`
  
  border-radius: 3px;
  border: 1px solid black;
  width: 35%;  
  padding: 12px 20px;
  display: inline-block;
  font-size: 16px;
`;

export const SubmitRehome = styled.button`  
  border: 1px solid black;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
        background-color: lightcyan;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

export const Image = styled.img`
  float:right;
  margin-left:60px;
  margin-right:100px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 500px;
`
