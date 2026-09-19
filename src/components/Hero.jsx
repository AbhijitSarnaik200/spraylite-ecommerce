import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-copy">
                <p className="eyebrow">
                    YOUR NEW SIGNATURE SCENT
                </p>

                <h1>
                    Make every
                    <br />
                    <em>moment</em> memorable.
                </h1>

                <p className="hero-text">
                    Feel-good fragrances and everyday essentials made to move with you.
                </p>

                <div className="hero-buttons">
                    <a className="button primary" href="#shop">
                        Shop bestsellers
                        <ArrowRight size={17} />
                    </a>

                    <a className="text-link" href="#collections">
                        Explore collections
                        <ArrowRight size={16} />
                    </a>
                </div>

                <div className="hero-proof">
                    <div>
                        <strong>4.8/5</strong>
                        <span>Customer rating</span>
                    </div>

                    <div>
                        <strong>50k+</strong>
                        <span>Happy customers</span>
                    </div>
                </div>
            </div>

            <div className="hero-art">
                <div className="sun"></div>

                <div className="hero-card">
                    <span>NEW SEASON</span>

                    <strong>
                        Soft notes.
                        <br />
                        Bold you.
                    </strong>

                    <small>Discover the collection →</small>
                </div>

                <img
                    src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1000&q=85"
                    alt="Minimal perfume bottle in a warm, editorial setting"
                />
            </div>
        </section>
    );
}