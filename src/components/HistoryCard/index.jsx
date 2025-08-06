import './styless.css';

export const HistoryCard = ({ title, price, purchaseDateTime }) => {
    const date = purchaseDateTime.toDate();
    const formattedTime = date.toLocaleDateString();

    return (
        <div className="post-history">
            <div className='card'>
                <div className='card-header'>
                    <span className='dateHistory'>{formattedTime}</span>
                </div>
                <div className='card-body'>
                    <h5>{title}</h5>
                    <p>R$ {price}</p>
                </div>
            </div>
        </div>
    )
};