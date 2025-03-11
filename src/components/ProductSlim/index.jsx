import './styles.css';

export const ProductSlim = ({ cover, title, body }) => {

    return (
        <div className="post-slim">
            <img src={cover} alt={title} />
            <div className="post-slim-content">
                <h2>
                    {title}
                </h2>
                <p>{body}</p>
            </div>
        </div>
    );
}