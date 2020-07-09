import React from 'react';

// Styles
import './popup.styles.scss';

// Styled Components
import { PopupContainer, Overlay, PopUp, CloseBtn } from './popup.styles';

const Popup = ({ active, togglePopup, children }) => {
    const activePopup = active ? 'open' : `close`;

    return (
        <PopupContainer className={activePopup}>
            <Overlay className='overlay' onClick={togglePopup} />

            <PopUp className='popup'>
                <CloseBtn className='close-btn' onClick={togglePopup}>
                    &times;
                </CloseBtn>
                {children}
            </PopUp>
        </PopupContainer>
    );
};

export default Popup;
