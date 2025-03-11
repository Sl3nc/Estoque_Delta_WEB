import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaCoins } from "react-icons/fa6";

export function ModalRequest(props) {
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title>{<FaCoins/>}<br/>Solicitar produto</Modal.Title>
            </Modal.Header>
            <Modal.Body>Confirma a escolha do produto abaixo?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Confirmar
                </Button>
            </Modal.Footer>
        </Modal>
    )
};
