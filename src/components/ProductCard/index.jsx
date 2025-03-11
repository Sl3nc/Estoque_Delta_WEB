import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ModalRequest } from '../ModalRequest';

import './styless.css';

export const ProductCard = ({ cover, title, body }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="post" onClick={handleShow}>
                <img src={cover} alt={title} />
                <div className="post-content">
                    <h2>
                        {title}
                    </h2>
                    <p>{body}</p>
                </div>
                {/* <ModalRequest
                show={show}
                onHide={() => setShow(false)}
            /> */}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}