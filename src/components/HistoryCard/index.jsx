import {Toast} from 'react-bootstrap';
import './styless.css';

export const HistoryCard = ({ title, body }) => (
    <div className="post-history">
        <Toast>
            <Toast.Header closeButton={false}>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{title}</strong>
                <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
    </div>
);