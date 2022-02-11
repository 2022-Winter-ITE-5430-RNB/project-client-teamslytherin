import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FAQSection, Quesiton, Answer, Question, EachFAQ } from './FaqStyling'
import { Container } from "react-bootstrap";

const FAQS = () => {

    const faqs = [
        {
            question: 'Where are you located?',
            answer: 'Ado-Pet is located in 205 Blvd, Etobicoke, ON M9W 5L7'
        },
        {
            question: 'What are your working hours?',
            answer: '09:00am to 05:00pm'
            
        },
        {
            question: 'What are your requirements for adopting a pet?',
            answer: '1. Adopter must be at least 21 years of age and have identification ' +
                    '2. All members of the household should be present for the adoption '                                 
        },
        {
            question: 'What should I bring when I come to adopt an animal?',
            answer: 'All members of the household must be present to adopt a dog'      
        },
        {
            question: 'How long will the adoption process take?',
            answer: 'The entire adoption process varies but the goal is for the adoption to be completed within 2 to 3 days. ' +
                    'Due to limited space and insurance reasons, only adopters accompanied by A.D.O.P.T. personnel can be brought back to view the animals.'      
        },
        {
            question: 'What if I have questions after I get my new pet home?',
            answer: 'We understand that after you get our pet home, the adjustment period can be difficult. We encourage you to call us with any questions or problems,'+
            'hopefully, before small problems become big ones! We are very experienced with pet transitions and welcome the opportunity to help make it as smooth for you' +
            ' and your pet as possible. And even when all is going well, we love getting calls just to know how our “alumni” are doing.'      
        },
        {
            question: 'Do you take credit cards for adoption fees?',
            answer: 'Yes, we accept all major credit cards for adoption fees.'      
        },
        {
            question: 'I’d Like To Foster. What Do I Do Next?',
            answer: 'If you are interested in fostering, please complete and submit a volunteer application. '+
             'You will need to complete a volunteer orientation and volunteer at the shelter before becoming a foster volunteer.'      
        }
    ];

    const [clicked, setClicked] = useState(false)

    const toggleFAQ = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index)
    }

    return (
        <FAQSection>
            <Container>
                {faqs.map((item, index) => {
                    return (
                        <EachFAQ>
                            <Question onClick={() => toggleFAQ(index)} key={index}>
                                <h1>
                                    <br></br>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span> 
                                    &nbsp;
                                    {item.question}
                                </h1>
                            </Question>
                            {clicked === index ? (
                                <Answer>
                                    <p>{item.answer}</p>
                                </Answer> 
                            ) : null}
                        </EachFAQ>
                    )
                })}
            </Container>
        </FAQSection>
    )
}

export default FAQS