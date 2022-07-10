import React from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';
// Need to find a way to implement valideateEmail function from ../utils/helpers.js
// import { validateEmail } from '../utils/helpers';

function Contact() {
    
    function sendEmail(e) {
        e.preventDefault();
    
    // Will need to coordinate with Michael on setting up an EmailJS account. sendForm() will need 4 parameters:
    // 1) service name
    // 2) template ID
    // 3) e.target
    // 4) User ID Key
    emailjs.sendForm('ykb-coaching', 'template_vuwoqs8', e.target, 'm9o8PuJxaPH4CT67S')
        .then(function (response) {
            console.log('SUCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });

        e.target.reset();
    }

    return(
        <section id='contact'>
            <h1 className='my-5'>Contact Us</h1>
            <div>
                <p>
                    Got any questions? Reach out to us for a free hour consultation. 
                </p>
            </div>
            <div>
                <p>
                    We'll go over your past experiences, what goals you want to achieve in the next year, and talk about resources and next steps for you to look over before working with us.
                </p>
            </div>
            {/* NOTE TO SELF: Be sure to change the email template on EmailJS's YKB account to enable the sending of respective fields. */}
            <div className='contact-form'>
                <form id='contact-form' onSubmit={sendEmail}>
                    <div className='my-2 flex-row'>
                        {/* <label htmlFor='name'>Name:</label><br/> */}
                        <input type='text' placeholder='Name' name='name' />
                    </div>
                    <div className='my-2 flex-row'>
                        {/* <label htmlFor='email'>Email Address:</label><br/> */}
                        <input type='email' placeholder='Email Address' name='email' />
                    </div>
                    <div className='my-2 flex-row'>
                        {/* <label htmlFor='message'>Message:</label><br/> */}
                        <textarea  placeholder='Message' rows='5' name='message'/>
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </section>
    )
};

export default Contact;