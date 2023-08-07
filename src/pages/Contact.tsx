import React from 'react'
import {  ContactComponent1 } from '../components/ContactComponent';
import TittleComponent from '../components/TittleComponent';

function ContactPage() {
    const title = "Contact Page" ;
  return (
    <>
    <TittleComponent data = {title} />
    <ContactComponent1 />
    </>
  );
}

export default ContactPage ;