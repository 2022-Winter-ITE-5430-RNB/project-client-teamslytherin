import styled from "styled-components";

export const FAQSection = styled.div`   
    background-color: white;
    display: flex;
    flex-direction: column;        
    padding: 100px;      
    position: relative;
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
    transition: transform .3s;   
    margin: auto;
`

export const EachFAQ = styled.div`   
    border-radius: 30px;
    border: 3px solid white;
    background-color: lightcyan;
    width: 70%;
    margin: auto;
`
