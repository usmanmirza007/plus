import * as React from 'react';
import {faqs} from '../constant';
import {FAQ} from './FAQ';

export const FAQs = ({data = faqs, faqStyle, iconStyle}) => {
  return (
    <>
      {data.map((faq, i) => (
        <FAQ key={i} question={faq.question} answer={faq.answer} faqStyle={faqStyle} iconStyle={iconStyle}/>
      ))}
    </>
  );
};
