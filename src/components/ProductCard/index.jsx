import { useState } from 'react';
import { Card } from 'react-bootstrap';

import { ModalRequest } from '../ModalRequest';
import { amount_firestore } from '../../utils/amount_firestore';

import './styless.css';

export const ProductCard = ({ id, image, title, price, amount, requestMethod }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="post"
                onClick={() => { 
                    amount_firestore(id).then((result) => {
                        result !== 0 ? setShow(true) 
                        : alert('Sem produtos disponíveis, em caso de dúvida, atualize a página')
                    }) 
                }}>
                <img alt={title}
                    src={image !== '' ? image : './no_image.png'} />
                <div className='card-body'>
                    <h4 className='card-title'>{title}</h4>
                    <div className='card-text'>
                        R$ {price}<span>|</span><span>Disponível: {amount}</span>
                    </div>
                </div>
            </div>
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