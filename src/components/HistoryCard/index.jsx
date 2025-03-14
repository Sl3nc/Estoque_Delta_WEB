import { Toast, Card } from 'react-bootstrap';
import { FaDollarSign } from "react-icons/fa6";
import { IconContext } from "react-icons";
import './styless.css';

export const HistoryCard = ({ title, price, purchaseDateTime }) => {
    const date = purchaseDateTime.toDate();
    const formattedTime = date.toLocaleDateString();

    return (
        <div className="post-history">
                    {/* <IconContext.Provider value={{ color: "#0597F2", size: "1em" }}>
                        {<FaDollarSign />}
                    </IconContext.Provider> */}
            <Card>
                <Card.Header>
                    <span className='dateHistory'>{formattedTime}</span>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <strong className="me-auto">{title}</strong>
                    </Card.Title>
                    <Card.Text>
                        R$ {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};