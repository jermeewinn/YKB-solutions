import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import { Alert, Button } from 'react-bootstrap';
// Need to find a way to implement valideateEmail function from ../utils/helpers.js
// import { validateEmail } from '../utils/helpers';

function Contact() {
    const [show, setShow] = useState(false)

    //Code for Alert upon successful submission of contact-form.
    function SuccessAlert() {
        if (show) {
            return(
                <div className='contact-form-alert'>
                    <Alert variant='success' onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>
                            Email sent successfully!
                        </Alert.Heading>
                        <p>
                            We'll be in touch shortly.
                        </p>
                    </Alert>
                </div>
            )
        }
    };
    // Code to send emails via EmailJS
    function sendEmail(e) {
        e.preventDefault();
    
    emailjs
        // Find a way to hide credential info in a config.json file.
        .sendForm(
            'ykb-coaching', 
            'template_vuwoqs8', 
            e.target,
            'm9o8PuJxaPH4CT67S'
        )
        .then(function (response) {
            console.log('SUCESS!', response.status, response.text);
            setShow(true);
        }, function (error) {
            console.log('FAILED...', error);
        });

        e.target.reset();
    };

    return(
        <section id='contact'>
            <div>
                <Helmet>
                    <title>YKB Coaching | Contact Us</title>
                </Helmet>
            </div>
            <h1 className='my-5'>Contact Us</h1>
            <div className='contact-content'>
                <h3>
                    Got any questions? Reach out to us for a free hour consultation.
                </h3>
                <div>
                    <p>
                        We'll go over your past experiences, what goals you want to achieve in the next year, and talk about resources and next steps for you to look over before working with us.
                    </p>
                </div>
            </div>
            {/* NOTE TO SELF: Be sure to change the email template on EmailJS's YKB account to enable the sending of respective fields. */}
            <div className='contact-form'>
                <form id='contact-form' onSubmit={sendEmail}>
                    <div className='my-2 flex-row contact-textarea'>
                        <input type='text' placeholder='Name' name='name' />
                    </div>
                    <div className='my-2 flex-row contact-textarea'>
                        <input type='email' placeholder='Email Address' name='email' />
                    </div>
                    <div className='my-2 flex-row contact-textarea'>
                        <textarea  placeholder='Message' rows='5' name='message'/>
                    </div>
                    <Button type='submit'>Submit</Button>
                </form>
                <SuccessAlert />
            </div>
        </section>
    )
};

export default Contact;