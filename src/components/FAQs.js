import * as React from 'react';
import {faqs} from '../constant';
import {CustomCollapse} from './CustomCollapse';

export const FAQs = ({data = faqs, faqStyle, iconStyle}) => {
  return (
    <>
      {data.map((faq, i) => (
        <CustomCollapse key={i} title={faq.question} content={faq.answer} style={faqStyle} iconStyle={iconStyle}/>
      ))}
    </>
  );
};
