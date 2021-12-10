import React, { useState } from 'react';
import SmButton from './buttons/SmButton';

const ContactForm = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
    return (
        <form id="contact-form" 
              onSubmit={handleSubmit} 
              className='
                text-dark-black flex flex-wrap justify-center
                bg-grey py-2 px-4 -mx-3 rounded-button shadow-md
                font-tertiary
                '
        >
            <label className='text-white w-full text-center mb-1 font-secondary'>
                Name
            </label>
            <input type="text" 
                   name='name' 
                   onChange={handleChange} 
                   defaultValue={name} 
                   className='rounded-button px-1 mb-2'/>
            <label className='text-white w-full text-center mb-1 font-secondary'>
              E-Mail
            </label>
              <input type="email" 
                     name='email' 
                     onChange={handleChange} 
                     defaultValue={email} 
                     className='rounded-button px-1 mb-2'
                />
            <label className='text-white w-full text-center mb-1 font-secondary'>
              Message
            </label>
            <textarea name='message' 
                      onChange={handleChange} 
                      defaultValue={message} 
                      rows="4"
                      className='w-full rounded-button px-1 mb-4'
            />
            <button type="submit"
                    className='
                      bg-baby-blue py-0.25 rounded-button w-mobile-sm-button-w
                      text-mobile-sm-button font-tertiary mb-1
                    '>Submit</button>
        </form>
    )
}

export default ContactForm
