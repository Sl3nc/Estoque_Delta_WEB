import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

import { ModalRequest } from '../ModalRequest';
import { amount_firestore } from '../../utils/amount_firestore';

import './styless.css';

export const ProductCard = ({ id, image, title, price, amount, requestMethod }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Card style={{ width: '18rem' }} className="post"
                onClick={() => { 
                    amount_firestore(id).then((result) => {
                        result !== 0 ? setShow(true) 
                        : alert('Sem produtos disponíveis, em caso de dúvida, atualize a página')
                    }) 
                }}>
                <Card.Img variant="top" alt={title}
                    src={image !== '' ? image : './logo192.png'} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        R$ {price}<span>|</span><span>Disponível: {amount}</span>
                    </Card.Text>
                </Card.Body>
            </Card>
            <ModalRequest
                show={show}
                onHide={() => setShow(false)}
                id={id}
                image={image}
                title={title}
                price={price}
                amount={amount}
                requestMethod={requestMethod}
            />
        </>
    );
}