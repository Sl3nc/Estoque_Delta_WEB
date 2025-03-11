import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalRequest } from '../ModalRequest';

import './styless.css';

export const ProductCard = ({ cover, title, body }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="post" onClick={() => setShow(true)}>
                <img src={cover} alt={title} />
                <div className="post-content">
                    <h2>
                        {title}
                    </h2>
                    <p>{body}</p>
                </div>
            </div>
            <ModalRequest
                show={show}
                onHide={() => setShow(false)}
            />
        </>
    );
}