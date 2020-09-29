import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    
`;

export const Header = styled.header`
    padding: 32px 0;
    background: #28262e;

    .iqoption-status {
        display: block;
        margin-left: 30px;
        width: 70px;
        span {
            font-size: 15px;
        }
        img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
            margin-left: 15px;     
        }
        svg {
            background:#008000;
            border-radius: 50%;
            margin-left: 5px;
            line-height: 24px;
        }
    }

   
`;

export const HeaderContent = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    button {
        margin-left: auto;
        background: transparent;
        border: 0;
        svg {
            color: #999591;
            width: 20px;
            height: 20px;
            transition: 0.3s color;
        }

        &:hover svg {
            color: #ff9000;
        }

    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 80px;
    img {
        border-radius: 50%;
        width: 56px;
        margin-right: 14px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        line-height: 24px;

        span {
            color: #f4ede8;
        }

        strong {
            color: #ff9000;
        }
    }
`;


export const Body = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #999591;
    
    strong  {
        margin-left: auto;
    }
    button {
        width: 34px;
        margin-left: auto;
        color: #999591;
        background: transparent;
        border: 0;
        svg {
            
            transition: 0.3s color;
        }
        &:hover svg {
            color: #ff9000;
        }

    }
    
`;

export const EventList = styled.div`
        background: #28262e;
        border-radius: 5px;
        max-width: 1120px;
        width: 60%;
        padding: 24px;
        display: flex;
        margin: 0 auto;
        align-items: center;
        & + & { 
            margin-top: 16px;
        }
    }
    div {
        margin-right: 30px;
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%; /** Utilizar 50% de border radius quando eu quiser que uma imagem fique 100% arrendondada */
        }
        strong {
            font-size: 20px;
            color: #FFF;
        }
        p {
            font-size: 18px;
            color: #a8a8b3;
            margin-top: 4px;
            display: flex;
        }
        button {
            background: transparent;
            border-style: none;
            color: #a8a8b3;
        }
        svg {
            cursor: pointer;
        &:hover {
            transition: 0.5s;
            color: #ff9000;
        }
        }
    }
    > svg {
        margin-left: auto; /** Vai pegar todo o espaço disponivel na esquerda e aplicar, ou seja vai colocar praticamente no final do elemento. */
        color: #CBCBD6;
        cursor: pointer;
        &:hover {
            transition: 0.5s;
            transform: translateY(-3px);
            color: #ff9000;
        }

`;
