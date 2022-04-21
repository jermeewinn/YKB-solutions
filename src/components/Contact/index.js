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
}