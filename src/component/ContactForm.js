import React from 'react';

const ContactForm = () => {
   return (
      <form action="https://formspree.io/f/mgejznkg" method="post" className='contactForm'>
         <label className='formLabel' htmlFor="name">NAME</label>
         <input className='inputStyle' type="text" id='name' name='name' />
         <label className='formLabel' for="email">EMAIL</label>
         <input className='inputStyle' name="Email" id="email" type="email"/>
         <textarea className='areaStyle' name="text" id="text" cols="30" rows="10">

         </textarea>
         <button className='btnStyle' type="submit">COTACT</button>
      </form>
   );
};

export default ContactForm;