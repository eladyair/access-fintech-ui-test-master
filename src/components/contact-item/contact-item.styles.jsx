import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const ContactDetails = styled.div`
    width: 50%;
    display: flex;
`;

export const ContactsCTA = styled.div`
    display: flex;
`;

export const AvatarFigure = styled.figure`
    width: 5rem;
    height: 5rem;
    -webkit-shape-outside: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    display: inline-block;
`;
