import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiPower, FiPlusCircle, FiTrash2, FiArrowUp, FiArrowDown, FiPlusSquare } from 'react-icons/fi';
import { Container, Header, HeaderContent, Profile, Body, EventList } from './styles';
import { useHistory } from 'react-router-dom';
import Modal from '../../Components/modal';
import Button from '../../Components/button';
import Input from '../../Components/input';
import { Form } from  '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErrors';
import * as Yup from 'yup';



const Dashboard: React.FC = () => {
    interface Events {
        name: string;
        local: string;
        comentario: string;
    }

    const history = useHistory();
    const formRef = useRef<FormHandles>(null);
    const [showModal, setShowModal] = useState(false);
    const [events, setEvents] = useState<Events[]>(()=> {
    const storagedLista = localStorage.getItem('@NovaLista:lista');
        if (storagedLista) {
            return JSON.parse(storagedLista);
        }
        return [];
    });

    useEffect(() => {
        localStorage.setItem('@NovaLista:lista', JSON.stringify(events));
    }, [events]);
    const handleAddEvent = useCallback(async (data: Events) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome do evento obrigatório'),
                local: Yup.string().required('Local do evento obrigatório'),
                comentario: Yup.string(),
            })
            await schema.validate(data, {
                abortEarly: false,
            });
            console.log(data);
            setEvents([...events, data]);
            setShowModal(false);

        } catch(err) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }
    }, []);
    return(
        <Container>
            <Header>
                <HeaderContent>
                    <Profile>
                        <img src="https://avatars0.githubusercontent.com/u/5678023?s=400&u=dfdc2b3c239f20f288f063357aa497911bad9ade&v=4" alt="Vinicius"></img>
                        <div>
                            <span>Bem Vindo, </span>
                            <strong>Vinicius</strong>
                        </div>
                    </Profile>
                    <button type="button" onClick={() => history.push('/')}>
                        <FiPower />
                    </button>
                </HeaderContent>
            </Header>
            <Body>
                <strong>EVENTOS</strong>
                <button type="button" onClick={() => setShowModal(true)}>
                    <FiPlusCircle size={32}/>
                </button>
            </Body>
            {showModal && 
            <Modal onClose={async () => setShowModal(false)}>
                <Form ref={formRef} onSubmit={handleAddEvent}>
                    <h1> Novo Evento </h1>
                    <Input name='name' placeholder='Nome do evento'/>
                    <Input name='local' placeholder='Local'/>
                    <Input name='comentario' placeholder='Comentario'/>
                    <Button > <div><FiPlusSquare size={25} /></div> Adicionar uma imagem  </Button>
                    <Button type='submit'> Criar </Button>
                </Form>
            </Modal>}
            {events.map(event => (
            <EventList>
                    <div>
                        <img src='https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_261/https://dermofit.com.br/wp-content/uploads/2019/07/local-icon.jpg'/>
                    </div>
                    <div>
                        <strong>{event.name}</strong>
                        <p>Local: {event.local}</p>
                        <p>Comentario: {event.comentario}</p>
                        <p><button onClick={() => {}}> <FiArrowUp size={20}/> </button> Likes: 0 </p>
                        <p><button onClick={() => {}}> <FiArrowDown size={20}/> </button> Dislikes: 0 </p>
                    </div>
            <FiTrash2 size={20}/>
            </EventList>
            ))}
        </Container>
    )

}


export default Dashboard;