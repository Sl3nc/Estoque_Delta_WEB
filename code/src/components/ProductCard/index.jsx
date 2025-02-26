export const ProductCard = ({ id, title, body }) => (
    <div className={id}>
        <h1>{title}</h1>
        <p>{body}</p>
    </div>
);