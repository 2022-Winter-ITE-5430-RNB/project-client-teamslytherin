import styled from "styled-components";

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 80vh;
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