import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import Reveal from './Reveal';
import saree1 from '../assets/saree1.png';
import saree2 from '../assets/saree2.png';

export default function Collections() {
    // Initial static data as fallback
    const staticProducts = [
        {
            id: 1,
            name: "Ethereal Mint Banarasi",
            price: 18500,
            image_url: saree1 // Local import
        },
        {
            id: 2,
            name: "Indigo Mist Linen",
            price: 6200,
            image_url: saree2 // Local import
        }
    ];

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*');

                if (error) throw error;

                if (data && data.length > 0) {
                    setProducts(data);
                } else {
                    setProducts(staticProducts);
                }
            } catch (error) {
                console.warn("Supabase fetch error (likely due to missing keys or table), using static data:", error.message);
                setProducts(staticProducts);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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
                    {loading ? (
                        <p style={{ textAlign: 'center' }}>Loading collection...</p>
                    ) : (
                        products.map(product => (
                            <Reveal key={product.id}>
                                <div className="product-card">
                                    <div className="product-image">
                                        {/* Handle both local imports and remote URLs */}
                                        <img
                                            src={product.image_url}
                                            alt={product.name}
                                            onError={(e) => {
                                                e.target.onerror = null; // Prevent infinite loop
                                                e.target.src = 'https://via.placeholder.com/400x600?text=Image+Not+Found';
                                            }}
                                        />
                                        <div className="product-overlay">
                                            <button className="view-btn">View Details</button>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <p className="price">₹{product.price.toLocaleString()}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
