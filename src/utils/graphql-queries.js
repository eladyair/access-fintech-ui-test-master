import gql from 'graphql-tag';

export const GET_CONTACTS = gql`
    query GetContacts {
        contacts {
            id
            firstName
            lastName
            phone
            email
        }
    }
`;

export const ADD_CONTACT = gql`
    mutation AddContact($firstName: String!, $lastName: String!, $phone: String, $email: String) {
        addContact(firstName: $firstName, lastName: $lastName, phone: $phone, email: $email) {
            id
            firstName
            lastName
            phone
            email
        }
    }
`;
