import styled from 'styled-components';

export const PopupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 5;
    transition: all 0.3s ease-in-out;
`;

export const Overlay = styled.div`
    transition: all 0.3s ease-in-out;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
`;

export const PopUp = styled.div`
    background: #fff;
    z-index: 3;
    width: 50rem;
    padding: 0 2rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.6, -0.29, 0.36, 1.19);
    transform: scale(0.3);
    opacity: 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    box-shadow: 0 0 280px 130px rgba(0, 0, 0, 0.3);
`;

export const CloseBtn = styled.div`
    position: absolute;
    top: -14px;
    right: 12px;
    font-size: 5rem;
    font-weight: bold;
    color: gray;
    cursor: pointer;
`;
