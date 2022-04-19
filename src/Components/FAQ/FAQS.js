import React, { useState, useEffect } from 'react'
import { IconContext } from 'react-icons'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { FAQHeading, FAQSection, Answer, Question, EachFAQ } from './FaqStyling'
import { Container } from "react-bootstrap";
import axios from 'axios';

const FAQS = () => {

    const [faqs, setFAQS] = useState([]);

    useEffect(() => {
        sendApiRequest();
    }, []);

    const sendApiRequest = async () => {
        try {
            const response = await axios.get(
                'https://ado-pet-server.herokuapp.com/api/faqs/'
            );
            setFAQS(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    const [clicked, setClicked] = useState(false)

    const toggleFAQ = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index)
    }

    return (
        <FAQSection>
            <FAQHeading>Frequently Asked Questions about Pet Adpotion</FAQHeading>
            <Container>
                {faqs.map((item, index) => {
                    return (
                        <EachFAQ>
                            <Question onClick={() => toggleFAQ(index)} key={index}>
                                <h1>
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