import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

export default function Header({
  menuOpen,
  setMenuOpen,
  searchOpen,
  setSearchOpen,
  query,
  setQuery,
  wishlistCount,
  cartCount,
  onWishlistClick,
  onCartClick,
}) {
  return (
    <>
      <div className="announcement">
        <Sparkles size={15} />
        Free shipping on orders over ₹999
        <span>•</span>
        Easy 7-day returns
      </div>

      <header className="header">
        <button
          className="icon-button mobile-only"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu />
        </button>

        <a
          className="logo"
          href="#top"
          aria-label="Spraylite home"
        >
          spray<span>lite</span>
          <small>EVERYDAY, ELEVATED</small>
        </a>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button
            className="icon-button mobile-only close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>

          <a href="#shop" onClick={() => setMenuOpen(false)}>
            Shop
          </a>

          <a
            href="#collections"
            onClick={() => setMenuOpen(false)}
          >
            Collections
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            Our story
          </a>

          <a href="#reviews" onClick={() => setMenuOpen(false)}>
            Reviews
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search />
          </button>

          <button
            className="icon-button badge-button"
            aria-label="Wishlist"
            onClick={onWishlistClick}
          >
            <Heart
              fill={wishlistCount ? 'currentColor' : 'none'}
            />

            {wishlistCount > 0 && <b>{wishlistCount}</b>}
          </button>

          <button
            className="icon-button badge-button"
            aria-label="Shopping bag"
            onClick={onCartClick}
          >
            <ShoppingBag />

            {cartCount > 0 && <b>{cartCount}</b>}
          </button>
        </div>
      </header>

      {searchOpen && (
        <div className="search-panel">
          <Search size={18} />

          <input
            autoFocus
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            aria-label="Clear search"
            onClick={() => {
              setQuery('');
              setSearchOpen(false);
            }}
          >
            <X size={18} />
          </button>
        </div>
      )}
    </>
  );
}