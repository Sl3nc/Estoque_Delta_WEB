import { ModalRequest } from "../ModalRequest";
import { ProductCard } from "../ProductCard";
import './styless.css';

export const Product = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <ProductCard
                key={post.id}
                image={post.image}
                title={post.title}
                price={post.price}
                amount={post.amount}
                type={post.type}
            />
        ))}
    </div>
);