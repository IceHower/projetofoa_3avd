import styled from 'styled-components';
import loginImage from '../../assets/cadastro.jpg';
import { shade } from 'polished'

export const Container = styled.div`
    height: 100vh; /** vh - view port heigh, faz  com que a div ocupe 100% da tela visivel*/
    display: flex;
    align-items: stretch;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;
    }
    img {
        width: 160px;
        margin-bottom: 8px;
    }

    h1 {
        margin-bottom: 24px;
    }
    a {
        color: #ff9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        svg {
            margin-right: 16px;
        }
        &:hover {
            color: ${shade(0.2, '#ff9000')}
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${loginImage}) no-repeat center;
    background-size: cover;
`;
