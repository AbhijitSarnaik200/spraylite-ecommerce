import { Heart, Plus, Star } from 'lucide-react';

export default function ProductCard({
  product,
  wished,
  onWish,
  onAdd,
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />

        <span className="tag">
          {product.tag}
        </span>

        <button
          className="wish"
          aria-label={`Add ${product.name} to wishlist`}
          onClick={onWish}
        >
          <Heart
            fill={wished ? 'currentColor' : 'none'}
          />
        </button>

        <button
          className="quick-add"
          onClick={onAdd}
        >
          Add to bag
          <Plus size={16} />
        </button>
      </div>

      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>

        <div className="rating">
          <Star
            size={14}
            fill="currentColor"
          />
          {product.rating}
          <span>({product.reviews})</span>
        </div>
      </div>

      <div className="price">
        <strong>
          ₹{product.price.toLocaleString('en-IN')}
        </strong>

        <del>
          ₹{product.oldPrice.toLocaleString('en-IN')}
        </del>
      </div>
    </article>
  );
}