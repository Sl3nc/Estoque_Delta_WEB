import { useState } from 'react';
import { ModalRequest } from '../ModalRequest';
import './styless.css';

export const ProductCard = ({ cover, title, body }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="post" onClick={handleShow}>
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2>
                    {title}
                </h2>
                <p>{body}</p>
            </div>
            <ModalRequest show={show} handleClose={handleClose}/>
        </div>
    );
}