import React, { useRef, useEffect, useState, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from '../../context/AuthContext';

const nav_links = [
    { path: '/home', display: 'Home' },
    { path: '/about', display: 'About' },
    { path: '/accomodation', display: 'Accommodations' },
];

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const headerRef = useRef(null);

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            } else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc);
    }, []);

    const handleLogout = () => {
        dispatch({ type: "LOGIN_LOGOUT" });
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        {/* Logo */}
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>

                        {/* Navigation */}
                        <div className={`navigation ${isMenuOpen ? "active" : ""}`}>
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav_links.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <NavLink
                                            to={item.path}
                                            className={(navClass) => navClass.isActive ? 'active__link' : ''}
                                        >
                                            {item.display}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* User Authentication Links */}
                        <div className="nav__right d-flex align-items-center gap-4">
                            {user ? (
                                <>
                                    <span className="username">Welcome  {user.username}</span>
                                    <Button className="btn secondary__btn logout-btn" onClick={handleLogout}>Logout</Button>
                                </>
                            ) : (
                                <div className="nav__btns d-flex align-items-center gap-4">
                                    <Button className="btn secondary__btn">
                                        <Link to='/login'>Login</Link>
                                    </Button>
                                    <Button className="btn primary__btn">
                                        <Link to='/register'>Register</Link>
                                    </Button>
                                </div>
                            )}

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
