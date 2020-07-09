import React from 'react';

// Styles
import './contact-item.styles.scss';

// Styled Components
import { ContactContainer, ContactDetails, AvatarFigure, ContactsCTA } from './contact-item.styles';

const ContactItem = ({ contact: { firstName, lastName, phone, email } }) => {
    let imgSrc = email ? `https://api.adorable.io/avatars/${email}` : 'https://api.adorable.io/avatars/face/eyes4/nose3/mouth7/8e8895';

    return (
        <ContactContainer>
            <ContactDetails className='contact-details'>
                <div>
                    <AvatarFigure>
                        <img src={imgSrc} alt='Contact' className='conatct-img' />
                    </AvatarFigure>
                </div>
                <div>
                    {firstName} {lastName}
                </div>
            </ContactDetails>
            <ContactsCTA className='contact-cta'>
                {phone ? (
                    <div>
                        <a href={`tel:${phone}`} className='btn'>
                            Call
                        </a>
                    </div>
                ) : null}

                {email ? (
                    <div>
                        <a href={`mailto:${email}`} className='btn'>
                            Email
                        </a>
                    </div>
                ) : null}
            </ContactsCTA>
        </ContactContainer>
    );
};

export default ContactItem;
