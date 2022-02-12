import styled from "styled-components";

export const FAQHeading = styled.h1`
    text-align: center;
    padding: 2rem;
    font-size: 3rem;        
`

export const FAQSection = styled.div`   
    background-color: white;
    display: flex;
    flex-direction: column;              
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
    margin: auto;    
`

export const EachFAQ = styled.div`   
    border-radius: 30px;
    border: 3px solid white;
    background-color: lightcyan;
    width: 70%;
    margin: auto;
`
