import React, {useState} from "react";
import "./accordion.css";

const Accordion  = () => {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    const   
   faqs = [
      {
        question: 'What does it cost to work with you?',
        answer: 'We mostly work on a fixed-bid basis for our projects, focusing on a select few clients at a time. To provide an accurate estimate, we need a clear understanding of your requirements, project scope, deliverables, and timelines. Typically, our projects fall within the range of £15,000 to £40,000 with an average duration of 8 to 12 weeks.Please note that the minimum engagement level for any project is currently set at £10,000.',
      },
      {
        question: 'What kind of businesses do you work with?',
        answer: 'We mostly work on a fixed-bid basis for our projects, focusing on a select few clients at a time. To provide an accurate estimate, we need a clear understanding of your requirements, project scope, deliverables, and timelines. Typically, our projects fall within the range of £15,000 to £40,000 with an average duration of 8 to 12 weeks.Please note that the minimum engagement level for any project is currently set at £10,000.',
      },
      {
        question: 'Do you work with WordPress, Wix, Squarespace?',
        answer: 'We mostly work on a fixed-bid basis for our projects, focusing on a select few clients at a time. To provide an accurate estimate, we need a clear understanding of your requirements, project scope, deliverables, and timelines. Typically, our projects fall within the range of £15,000 to £40,000 with an average duration of 8 to 12 weeks.Please note that the minimum engagement level for any project is currently set at £10,000.',
      },
      {
        question: 'How big is your team?',
        answer: 'We mostly work on a fixed-bid basis for our projects, focusing on a select few clients at a time. To provide an accurate estimate, we need a clear understanding of your requirements, project scope, deliverables, and timelines. Typically, our projects fall within the range of £15,000 to £40,000 with an average duration of 8 to 12 weeks.Please note that the minimum engagement level for any project is currently set at £10,000.'
      },
      {
        question : 'Do you provide white labeled services?',
        answer: 'We mostly work on a fixed-bid basis for our projects, focusing on a select few clients at a time. To provide an accurate estimate, we need a clear understanding of your requirements, project scope, deliverables, and timelines. Typically, our projects fall within the range of £15,000 to £40,000 with an average duration of 8 to 12 weeks.Please note that the minimum engagement level for any project is currently set at £10,000.'
      }
      // ...more FAQ items
    ];

      
//   const toggleFAQ = index => {
//     setFaqs(
//       faqs.map((faq, i) => {
//         if (i === index) {
//           faq.open = !faq.open;
//         } else {
//         //  faq.open = false;
//         }

//         return faq;
//       })
//     );
//   };

return (
    <>
    <div className="accordion">
        <h1>You have questions, We have answers.</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3 onClick={() => toggleAccordion(index)}>
            {faq.question}
            <span className="arrow">{activeIndex === index ? '▲' : '▼'}</span>
          </h3>
          {activeIndex === index && (
            <p className="answer">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
    </>
)
}


export default Accordion