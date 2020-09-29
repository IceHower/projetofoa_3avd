import React from 'react';
import { Container, Content, ModalMain } from './styles';

// O children da tag vai para a variavel children.
interface ModalProps {
    onClose(): Promise<void>;
}
const Modal: React.FC<ModalProps> = ({ children, onClose}) => {
return(
    <ModalMain>
    <Container>
        <button className='close' onClick={onClose}></button>
        <Content>
            {children}
        </Content>
    </Container>
    </ModalMain>
);

}

export default Modal;