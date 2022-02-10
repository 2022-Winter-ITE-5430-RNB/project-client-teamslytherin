import React, { useState } from 'react'

const FAQS = () => {

    const [faqs, setFaqs] = useState([
        {
            question: 'Where?',
            answer: 'Here',
            open: true
        },
        {
            question: 'What?',
            answer: 'This',
            open: false
        },
        {
            question: 'Who?',
            answer: 'Me',
            open: false
        },
    ]);

    const toggleFAQ = (index) => {
        setFaqs(faqs.map((faq,i) => {
            if(i === index)
            {
                faq.open = !faq.open;
            }
            else
            {
                faq.open = false;    
            }
            return faq;
        }))
    }

    return (
        <div className="faqs">
            {faqs.map((faq, i) => (
                <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
        </div>
    )
}

const FAQ = ({ faq, index, toggleFAQ }) => {
    return (
        <div 
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
           <div className="faq-question">
                {faq.question}
           </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQS