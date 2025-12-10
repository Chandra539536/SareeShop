import Reveal from './Reveal';

export default function About() {
    return (
        <section id="about" className="section bg-light">
            <div className="container about-container">
                <Reveal className="about-text">
                    <h2 className="section-title text-left">The Art of Rashmi A R</h2>
                    <p>
                        At Rashmi A R, we believe a saree is more than just six yards of fabric; it is a canvas of culture,
                        a testament to craftsmanship, and a silhouette of grace.
                    </p>
                    <p>
                        Sourced directly from the master weavers of Varanasi and Kanchipuram, each piece in our collection
                        tells a story of tradition woven with contemporary elegance.
                    </p>
                    <a href="#" className="text-link">Read Our Story &rarr;</a>
                </Reveal>
                <div className="about-decoration">
                    <div className="deco-box"></div>
                </div>
            </div>
        </section>
    );
}
