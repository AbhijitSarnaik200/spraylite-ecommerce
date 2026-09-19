import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react';

export default function CartDrawer({
  open,
  cart,
  cartCount,
  subtotal,
  onClose,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  onStartShopping,
}) {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-head">
          <h2>
            Your bag <span>({cartCount})</span>
          </h2>

          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <ShoppingBag size={42} />

            <h3>Your bag is waiting.</h3>

            <p>Add something you love to get started.</p>

            <button
              className="button primary"
              onClick={onStartShopping}
            >
              Start shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />

                  <div className="cart-item-info">
                    <strong>{item.name}</strong>

                    <small>{item.category}</small>

                    <span>
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>

                    <div className="quantity">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>

                      <b>{item.quantity}</b>

                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>

                      <button
                        className="remove"
                        onClick={() => onRemove(item.id)}
                        aria-label="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div>
                <span>Subtotal</span>

                <strong>
                  ₹{subtotal.toLocaleString('en-IN')}
                </strong>
              </div>

              <small>
                Taxes and shipping calculated at checkout.
              </small>

              <button
                className="button dark full"
                onClick={onCheckout}
              >
                Proceed to checkout
                <ArrowRight size={17} />
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}