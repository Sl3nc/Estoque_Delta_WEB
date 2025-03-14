import './styles.css';

export const ProductSlim = ({ image, title, price }) => {

    return (
        <div className="post-slim">
            <img src={image !== '' ? image : './logo192.png'} alt={title} />
            <div className="post-slim-content">
                <h2>
                    {title}
                </h2>
                <p>R$ {price}</p>
            </div>
        </div>
    );
}