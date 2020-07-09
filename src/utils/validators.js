export const isEmailValid = email => {
    let mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        return true;
    } else {
        return false;
    }
};

export const isPhoneValid = phone => {
    let phoneRegEx = /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})$/;
    if (phone.match(phoneRegEx)) {
        return true;
    } else {
        return false;
    }
};
