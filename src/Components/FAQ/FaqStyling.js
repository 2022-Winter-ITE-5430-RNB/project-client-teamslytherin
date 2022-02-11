import styled from "styled-components";

export const FAQSection = styled.div`   
    background-color: white;
    display: flex;
    flex-direction: column;        
    padding: 100px;  
    height: 100vh;
    position: relative;
`

export const Question = styled.div`   
    background-color: lightcyan; 
    justify-content: space-between;
    align-items: center;
    width: 100%;    
    text-align: center;
    cursor: pointer;
    padding: 2rem;
    font-size: 2rem;    
`

export const Answer = styled.div`
    background-color: lightcyan;
    justify-content: space-between;
    align-items: center;
    width: 100%;    
    text-align: center;
    cursor: pointer;
    font-size: 20px; 
    transition: transform .3s;   
`

export const EachFAQ = styled.div`   

`
