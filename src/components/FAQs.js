import * as React from 'react';
import {faqs} from '../constant';
import {FAQ} from './FAQ';

export const FAQs = () => {
  return (
    <>
      {faqs.map((faq, i) => (
        <FAQ key={i} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
};
