import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header id="header" className={isScrolled ? 'scrolled' : ''}>
            <div className="container header-container">
                <a href="#" className="logo">Rashmi A R</a>
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                        <li><a href="#collections" onClick={closeMenu}>Collections</a></li>
                        <li><a href="#about" onClick={closeMenu}>Our Story</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                    </ul>
                    <button className="cta-button-small">Shop Now</button>
                </nav>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </header>
    );
}
