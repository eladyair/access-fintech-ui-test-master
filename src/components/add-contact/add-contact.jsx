import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

// Styles
import './add-contact.styles.scss';

// Styled Components
import { AddContactContainer, Form, FormField, Input, CTAGroup } from './add-contact.styles';

// Utils
import { ADD_CONTACT } from '../../utils/graphql-queries';
import * as validators from '../../utils/validators';

// Components
import Popup from '../popup/popup';

const AddContact = ({ handleAdd, activeToggle, togglePopup }) => {
    const [contactDetails, setContactDetails] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        firstNameError: false,
        lastNameError: false,
        phoneError: false,
        emailError: false
    });

    const [addContact, { data }] = useMutation(ADD_CONTACT);

    const { firstName, lastName, phone, email, firstNameError, lastNameError, phoneError, emailError } = contactDetails;

    const handleChnage = e => {
        const { name, value } = e.target;

        setContactDetails({ ...contactDetails, [name]: value });
    };

    const handleBlur = e => {
        const { name, value } = e.target;

        if (name === 'firstName' || name === 'lastName') {
            validateFullName(name, value);
        }

        if (name === 'phone') {
            validatePhone(value);
        }

        if (name === 'email') {
            validateEmail(value);
        }
    };

    const validateFullName = (name, value) => {
        if (value === '') {
            if (name === 'firstName') {
                setContactDetails({ ...contactDetails, firstNameError: true });
            } else if (name === 'lastName') {
                setContactDetails({ ...contactDetails, lastNameError: true });
            }
        } else {
            if (name === 'firstName') {
                setContactDetails({ ...contactDetails, firstNameError: false });
            } else if (name === 'lastName') {
                setContactDetails({ ...contactDetails, lastNameError: false });
            }
        }
    };

    const validatePhone = value => {
        if (value && !validators.isPhoneValid(value)) {
            setContactDetails({ ...contactDetails, phoneError: true });
        } else {
            setContactDetails({ ...contactDetails, phoneError: false });
        }
    };

    const validateEmail = value => {
        if (value && !validators.isEmailValid(value)) {
            setContactDetails({ ...contactDetails, emailError: true });
        } else {
            setContactDetails({ ...contactDetails, emailError: false });
        }
    };

    const handleCancel = () => {
        togglePopup();
    };

    const handleSubmit = e => {
        e.preventDefault();

        const isFormValid = validateForm();

        if (isFormValid) {
            addContact({ variables: { firstName, lastName, phone, email } });

            setContactDetails({ ...contactDetails, firstName: '', lastName: '', phone: '', email: '' });

            handleAdd();

            togglePopup();
        }
    };

    const validateForm = () => {
        if (firstName === '') {
            setContactDetails({ ...contactDetails, firstNameError: true });
        } else if (lastName === '') {
            setContactDetails({ ...contactDetails, lastNameError: true });
        } else if (phone !== '' && !validators.isPhoneValid(phone)) {
            setContactDetails({ ...contactDetails, phoneError: true });
        } else if (email !== '' && !validators.isEmailValid(email)) {
            setContactDetails({ ...contactDetails, emailError: true });
        } else if (firstName !== '' && lastName !== '') {
            return true;
        }
    };

    return (
        <Popup active={activeToggle} togglePopup={togglePopup}>
            <AddContactContainer>
                <h3>New Contact</h3>
                <Form onSubmit={handleSubmit}>
                    <FormField>
                        <label htmlFor='firstName' className={`${firstNameError ? 'error' : ''}`}>
                            First Name:{' '}
                        </label>
                        <Input type='text' name='firstName' value={firstName} onChange={handleChnage} onBlur={handleBlur} />
                    </FormField>
                    <FormField>
                        <label htmlFor='lasttName' className={`${lastNameError ? 'error' : ''}`}>
                            Last Name:{' '}
                        </label>
                        <Input type='text' name='lastName' value={lastName} onChange={handleChnage} onBlur={handleBlur} />
                    </FormField>
                    <FormField>
                        <label htmlFor='phone' className={`${phoneError ? 'error' : ''}`}>
                            Phone:{' '}
                        </label>
                        <Input type='text' name='phone' value={phone} onChange={handleChnage} onBlur={handleBlur} />
                    </FormField>
                    <FormField>
                        <label htmlFor='email' className={`${emailError ? 'error' : ''}`}>
                            Email:{' '}
                        </label>
                        <Input type='text' name='email' value={email} onChange={handleChnage} onBlur={handleBlur} />
                    </FormField>
                    <CTAGroup>
                        <div className='button' onClick={handleCancel}>
                            Cancel
                        </div>
                        <button type='submit' className='btn'>
                            Save
                        </button>
                    </CTAGroup>
                </Form>
            </AddContactContainer>
        </Popup>
    );
};

export default AddContact;
