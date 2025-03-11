import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaDollarSign } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { ProductSlim } from '../ProductSlim';
import './styles.css'

export function ModalRequest(props) {
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title >
                    Solicitar produto
                </Modal.Title>
                <IconContext.Provider value={{ color: "#0597F2", size: "2em"}}>
                    {<FaDollarSign />}
                </IconContext.Provider>
            </Modal.Header>
            <Modal.Body>
                <p className='title-body'>Confirma a escolha do produto abaixo?</p>
                {<ProductSlim
                    cover={props.cover}
                    title={props.title}
                    body={props.body}
                />
                }
            </Modal.Body>
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
