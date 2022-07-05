import React from 'react';
import emailjs from 'emailjs-com';
import { validateEmail } from '../utils/helpers';

function Contact() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');
    // // This will handle information validation. 
    // // If we were to console.log(handleChange), it should be able to console log every keystroke.
    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`$${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    // };

    // // This will handle submission of information from the contact form.
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     };
    // };
    function sendEmail(e) {
        e.preventDefault();
    
    //Will need to coordinate with Michael on setting up an EmailJS account. sendForm() will need 4 parameters:
    //1) service name
    //2) template ID
    //3) e.target
    //4) User ID Key
    emailjs.sendForm('')
        .then(function (response) {
            console.log('SUCESS!', response.status, response.test);
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
            <div className='contact-form'>
                <form id='contact-form' onSubmit={sendEmail}>
                        <div className='my-2 flex-row'>
                            <label htmlFor='name'>Name:</label><br/>
                            <input type='text' name='name' />
                        </div>
                        <div className='my-2 flex-row'>
                            <label htmlFor='email'>Email Address:</label><br/>
                            <input type='email' name='email' />
                        </div>
                        <div className='my-2 flex-row'>
                            <label htmlFor='message'>Message:</label><br/>
                            <textarea name='message' rows='5' />
                        </div>
                        <button type='submit'>Submit</button>
                    </form>
            </div>
        </section>
    )
};

export default Contact;