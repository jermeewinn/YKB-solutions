import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');
    // This will handle information validation. 
    // If we were to console.log(handleChange), it should be able to console log every keystroke.
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`$${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

    // This will handle submission of information from the contact form.
    function handleSubmit(e) {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        };
    };

    return(
        <section id='contact'>
            <h1 className='my-5'>Contact Us</h1>
            <div id='left'>
                <p>
                    Got any questions? Reach out to us for a free hour consultation. 
                </p>
            </div>
            <div>
                <p>
                    We'll go over your past experiences, what goals you want to achieve in the next year, and talk about resources and next steps for you to look over before working with us.
                </p>
            </div>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div className='my-2 flex-row'>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' defaultValue={name} onChange={handleChange} name='name' />
                </div>
                <div className='my-2 flex-row'>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' defaultValue={email} onChange={handleChange} name='email' />
                </div>
                <div className='my-2 flex-row'>
                    <label htmlFor='message'>Message:</label>
                    <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
};

export default Contact;