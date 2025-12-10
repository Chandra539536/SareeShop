import Reveal from './Reveal';
import saree1 from '../assets/saree1.png';
import saree2 from '../assets/saree2.png';

export default function Collections() {
    return (
        <section id="collections" className="section">
            <div className="container">
                <Reveal>
                    <h2 className="section-title">Curated Elegance</h2>
                </Reveal>
                <Reveal>
                    <p className="section-subtitle">Discover our exclusive range of handpicked masterpieces.</p>
                </Reveal>

                <div className="products-grid">
                    <Reveal>
                        <div className="product-card">
                            <div className="product-image">
                                <img src={saree1} alt="Pastel Green Banarasi Saree" />
                                <div className="product-overlay">
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>Ethereal Mint Banarasi</h3>
                                <p className="price">₹18,500</p>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="product-card">
                            <div className="product-image">
                                <img src={saree2} alt="Ivory and Indigo Linen Saree" />
                                <div className="product-overlay">
                                    <button className="view-btn">View Details</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>Indigo Mist Linen</h3>
                                <p className="price">₹6,200</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
