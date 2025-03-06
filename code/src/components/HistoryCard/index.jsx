import './styless.css';

export const HistoryCard = ({ title, body }) => (
    <div className="post">
        <h2>
            {title}
        </h2>
        <p>{body}</p>
    </div>
);