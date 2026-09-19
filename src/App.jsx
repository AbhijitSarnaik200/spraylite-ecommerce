import { useMemo, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

// Data
import { products } from "./data/products";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import ProductCard from "./components/ProductCard";
import Review from "./components/Review";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";

// Styles
import "./styles.css";

export default function App() {

  // State Management

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  // Notification Management

  const showNotice = (message) => {
    setNotice(message);
  };

  useEffect(() => {
    if (!notice) return;

    const timer = window.setTimeout(() => {
      setNotice("");
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [notice]);

  // Product Filtering

  const filteredProducts = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return products;
    }

    return products.filter((product) => {
      const searchableText = `
        ${product.name}
        ${product.category}
      `.toLowerCase();

      return searchableText.includes(searchTerm);
    });
  }, [query]);

  // Cart Calculations

  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  // Wishlist Functions

  const toggleWishlist = (productId) => {
    setWishlist((currentWishlist) => {
      const isWished = currentWishlist.includes(productId);

      if (isWished) {
        return currentWishlist.filter(
          (id) => id !== productId
        );
      }

      return [...currentWishlist, productId];
    });
  };

  // Cart Functions

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
              ...item,
              quantity: item.quantity + 1,
            }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    showNotice(`${product.name} added to your bag`);
  };

  const updateQuantity = (productId, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
              ...item,
              quantity: Math.max(
                0,
                item.quantity + delta
              ),
            }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );
  };

  // Navigation Functions

  const handleWishlistClick = () => {
    showNotice(
      `${wishlist.length} item(s) in wishlist`
    );
  };

  const handleStartShopping = () => {
    setCartOpen(false);

    document
      .querySelector("#shop")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleCheckout = () => {
    showNotice("Checkout flow ready to connect");
  };

  // Render

  return (
    <div className="app">
      {/* Header */}
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
        query={query}
        setQuery={setQuery}
        wishlistCount={wishlist.length}
        cartCount={cartCount}
        onWishlistClick={handleWishlistClick}
        onCartClick={() => setCartOpen(true)}
      />

      <main id="top">
        {/* Hero Section */}
        <Hero />

        {/* Benefits Section */}
        <Benefits />

        {/* Products Section */}
        <section className="section" id="shop">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                CURATED FOR YOU
              </p>

              <h2>
                Find your everyday favorite.
              </h2>
            </div>

            <a
              className="text-link desktop-only"
              href="#shop"
            >
              View all products
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                wished={wishlist.includes(product.id)}
                onWish={() =>
                  toggleWishlist(product.id)
                }
                onAdd={() => addToCart(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="empty">
              No products found. Try another search.
            </div>
          )}
        </section>

        {/* Collection Banner */}
        <section
          className="split-banner"
          id="collections"
        >
          <div className="split-image">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty products arranged on a vanity"
            />
          </div>

          <div className="split-copy">
            <p className="eyebrow">
              THE SELF-CARE EDIT
            </p>

            <h2>
              A little ritual.
              <br />
              <em>A lot of you.</em>
            </h2>

            <p>
              From first spritz to final touch-up,
              build a routine that feels
              unmistakably yours.
            </p>

            <a
              className="button dark"
              href="#shop"
            >
              Shop the edit
              <ArrowRight size={17} />
            </a>
          </div>
        </section>

        {/* Reviews Section */}
        <section
          className="section"
          id="reviews"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                REAL PEOPLE, REAL LOVE
              </p>

              <h2>
                Little notes from our community.
              </h2>
            </div>
          </div>

          <div className="reviews">
            <Review
              quote="Cloud Mist is my new daily essential. Light, fresh, and I get compliments all day."
              name="Ananya S."
              meta="Verified buyer"
            />

            <Review
              quote="The packaging feels premium and the scent lasts much longer than expected."
              name="Rohan P."
              meta="Verified buyer"
            />

            <Review
              quote="Finally a fragrance brand that feels modern without being overwhelming."
              name="Meera K."
              meta="Verified buyer"
            />
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          className="newsletter"
          id="about"
        >
          <p className="eyebrow">
            STAY IN THE LOOP
          </p>

          <h2>
            Good scents. Great updates.
          </h2>

          <p>
            Get first access to new drops,
            exclusive offers, and little moments
            of inspiration.
          </p>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              showNotice("Thanks for subscribing!");
            }}
          >
            <input
              required
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
            />

            <button
              className="button dark"
              type="submit"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification */}
      {notice && (
        <div
          className="toast"
          role="status"
          aria-live="polite"
        >
          ✓ {notice}
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        cart={cart}
        cartCount={cartCount}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
        onStartShopping={handleStartShopping}
      />
    </div>
  );
}