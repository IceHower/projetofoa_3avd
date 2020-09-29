import styled from 'styled-components';

export const ModalMain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.6);
    display:flex;
    justify-content: center;
    align-items: center;
    .close {
        background-color: transparent;
        outline: none;
        width: 32px;
        height: 32px;
        right: calc(-100% + 64px);
        top: 16px;
        display: flex;
        position:relative;
        align-items: center;
        border: none;
        &::before,
        &::after {
            content: ' ';
            position: absolute;
            width: 2.5px;
            height: 24px;
            background-color: #FFF;
        }
        &::before {
            transform: rotate(45deg);
        }
        &::after {
            transform: rotate(-45deg);
        }
    }
`;

export const Container = styled.div`
    background-color: #312E38;
    color: #fff;
    width: 60%;
    height: 60%;
    border-radius: 15px 15px 15px 15px;
`;

export const Content = styled.div`
    display: flex;
    max-width: 1120px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    place-content: center;
    form {
        margin: 80px 0;
        max-width: 640px;
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
`;