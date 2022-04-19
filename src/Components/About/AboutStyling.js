import styled from "styled-components";

export const FormStyle = styled.form`
    width: 100%;
    background: #FFFFE0; 
    align-items: left;
    padding: 50px;
    min-height: 100vh;
`;

export const Head = styled.h1`
    color: black;        
    width: 60%;
    padding: 5px;
    margin-left:5%;    
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

export const Label = styled.label`  
  font-size: 18px;
  font-weight: 450;
`;

export const InputTextArea = styled.textarea`
  border-radius: 3px;
  border: 1px solid black;
  width: 35%;  
  min-height: 100px;
  padding: 12px 20px;
  display: inline-block;
  font-size: 16px;
`;

export const SubmitPost = styled.button`  
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
        background-color: grey;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;


export const Image = styled.img`
  float:right;
  margin-left:10px;
  margin-right:150px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0px;
  width: 500px;
`

export const Error = styled.div` 
  color: red;
  font-size: 18px;
`
export const EachS = styled.div`  
    font-size: 2rem;    
    justify-content: left;
    padding: 10px 0;
    margin-left: 5%;     
`;

export const EachStep = styled.div`  
    font-size: 2rem;    
    justify-content: left;
    padding: 10px 0;
    margin-left: 5%;     
`;

export const Allsteps = styled.div`  
    font-size: 2rem;
    justify-content: left;
    padding: 50px 0; 
`;







