import React, { useState, useEffect, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';

// Css transition
import { Transition } from 'react-transition-group';

// Utils
import { GET_CONTACTS } from '../../utils/graphql-queries';

// Styles
import './contact-list.styles.scss';

// Styled Components
import { ContactsContainer, ContactsHeading } from './contact-list.styles';

// Components
import ContactItem from '../contact-item/contact-item';
import SearchInput from '../search-input/search-input';
import AddContact from '../add-contact/add-contact';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [togglePopup, setTogglePopup] = useState(false);

    const { loading, error, data, refetch } = useQuery(GET_CONTACTS);

    useEffect(() => {
        if (data && data.contacts) {
            setContacts(data.contacts);
            sessionStorage.setItem('contacts', JSON.stringify(data.contacts));
        }
    }, [data]);

    if (error) {
        console.log('Query Error: ', error);
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleSearch = e => {
        const { value } = e.target;
        const originalContacts = JSON.parse(sessionStorage.getItem('contacts'));
        if (value) {
            const foundContacts = originalContacts.filter(contact => {
                if (
                    contact.firstName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    contact.lastName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    (contact.email && contact.email.toLowerCase().indexOf(value.toLowerCase()) >= 0) ||
                    (contact.phone && contact.phone.toLowerCase().indexOf(value.toLowerCase()) >= 0)
                ) {
                    return contact;
                }
            });

            setContacts(foundContacts);
        } else {
            setContacts(originalContacts);
        }
    };

    const updateList = () => {
        refetch();
    };

    const handleTogglePopup = () => {
        setTogglePopup(!togglePopup);
    };

    return (
        <ContactsContainer>
            <ContactsHeading>
                <h1 className='contacts-title'>Contacts</h1>
                <button className='btn' onClick={handleTogglePopup}>
                    New
                </button>
            </ContactsHeading>
            <Fragment>
                <Transition in={togglePopup} timeout={150} mountOnEnter unmountOnExit>
                    {state => (
                        <AddContact
                            handleAdd={updateList}
                            togglePopup={handleTogglePopup}
                            activeToggle={state === 'exiting' || state === 'entering' ? false : true}
                        />
                    )}
                </Transition>
            </Fragment>
            <SearchInput handleSearch={handleSearch} />
            <Fragment>{contacts.length > 0 && contacts.map(contact => <ContactItem key={contact.id} contact={contact} />)}</Fragment>
        </ContactsContainer>
    );
};

export default ContactList;
