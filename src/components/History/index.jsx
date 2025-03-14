import { HistoryCard } from "../HistoryCard";
import './styless.css';

export const History = ({ posts }) => (
    <div className="consumptions">
        {posts.map(post => (
            <HistoryCard
                key={post.id}
                title={post.productName}
                price={post.productPrice}
                purchaseDateTime={post.purchaseDateTime}
            />
        ))}
    </div>
);