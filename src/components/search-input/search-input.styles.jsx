import styled from 'styled-components';

export const Input = styled.input`
    width: 100%;
    display: inline-block;
    font-size: 16px;
    padding: 1rem;
    margin: 2rem 0;
    background: #ffffff;
    border: solid 0.1rem lightgray;
    outline: none;
    ::placeholder {
        padding-left: 0.4rem;
        color: lightgray;
    }
`;
