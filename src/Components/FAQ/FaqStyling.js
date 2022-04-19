import styled from "styled-components";

export const FAQHeading = styled.h1`
    text-align: center;
    padding: 2rem;
    font-size: 3rem;        
`

export const FAQSection = styled.div`   
    background-color:#FFFFE0;
    display: flex;
    flex-direction: column;              
    position: relative;
    min-height: 100vh;
`

export const Question = styled.div`
    justify-content: space-between;
    align-items: center;    
    text-align: center;
    cursor: pointer;
    padding: 2rem;
    font-size: 2rem;    
    margin: auto;       
`

export const Answer = styled.div`    
    justify-content: space-between;
    align-items: center;
    width: 90%;    
    text-align: center;
    cursor: pointer;
    font-size: 20px;     
    margin: auto;    
`

export const EachFAQ = styled.div`   
    border-radius: 30px;
    border: 3px solid #FFFFE0;
    background-color: lightcyan;
    width: 70%;
    margin: auto;
`
export const Button = styled.button`
  /* color: darkcyan;
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid darkcyan;
  border-radius: 3px; */
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
`
export const PetDesc = styled.div`   
    justify-content: space-between;
    align-items: center;
    width: 90%;    
    text-align: center;
    cursor: pointer;
    font-size: 20px;     
    margin: auto;        
`

export const Label = styled.label`   
      color: darkcyan;
    align-items: center;
    text-align: center;
    cursor: pointer;
    font-size: 15px;     
    margin: 1px;   
`
export const Input = styled.input`

  font-size:1.5em;
  margin: .5em;  
  border: 2px solid darkcyan;
  border-radius: 1px;
`