import { useEffect, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { ProductSlim } from '../ProductSlim';
import {amount_firestore} from '../../utils/amount_firestore';

import { FaCircleCheck, FaDollarSign } from "react-icons/fa6";
import { IconContext } from "react-icons";

import './styles.css'

export function ModalRequest(props) {
    const [requestBody, setRequestBody] = useState(true)

    useEffect(() => {
        if (props.show === false) {
            setRequestBody(true)
        }
    }, [props.show])

    const handleRequest = async () => {
        const result = await props.requestMethod(props.title, props.price, props.amount, props.id);

        if (result === -1){
            setRequestBody(!requestBody)
        }else{
            props.onHide()
            alert('Falha no pedido do produto, FAVOR NOTIFICAR O SUPORTE DO ERRO TIPO: ' + result)
        }
    }

    return (
        <Modal show={props.show} onHide={props.onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title >
                    Solicitar produto
                </Modal.Title>
                <IconContext.Provider value={{ color: "#0597F2", size: "2em" }}>
                    {<FaDollarSign />}
                </IconContext.Provider>
            </Modal.Header>
            <Modal.Body>
                {requestBody &&
                    <>
                        <p className='title-request'>Confirma a escolha do produto abaixo?</p>
                        {<ProductSlim
                            image={props.image}
                            title={props.title}
                            price={props.price}
                        />
                        }
                    </>
                }
                {requestBody === false &&
                    <>
                        <p className='title-request'>Escolha do produto CONFIRMADA</p>
                        <div className='content-request'>
                            <IconContext.Provider value={{ color: "#0597F2", size: "4em" }}>
                                <FaCircleCheck />
                            </IconContext.Provider>
                            <p className='warning-request'>Em caso de engano,<br />consulte a equipe responsável</p>
                        </div>
                    </>
                }
            </Modal.Body>
            <Modal.Footer id='modal-footer'>
                <Button variant="secondary" onClick={props.onHide}>
                    Fechar
                </Button>
                {requestBody &&
                    <Button variant="primary" 
                    onClick={() => {
                        amount_firestore(props.id).then((result) => {
                            result !== 0 ? handleRequest()
                                : alert('Este produto tornou-se indisponível pouco antes de você solicitar. A página será atualizada')
                        })
                    }}>
                        Confirmar
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    )
};
