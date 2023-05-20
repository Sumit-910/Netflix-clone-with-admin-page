import { useState } from 'react';
import {Link} from "react-router-dom";
import './navbar.scss';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => window.onscroll = null;
    };
    return (
        <>
            <div className={isScrolled ? "navbar scrolled" : "navbar"}>
                <div className="container">
                    <div className="left">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="logo" />
                        <Link to="/" className='link'><span>Homepage</span></Link>
                        <Link to="/series" className='link'><span>Series</span></Link>
                        <Link to="/movies" className='link'><span>Movies</span></Link>
                        <Link to="/" className='link'><span>New and Popular</span></Link>
                        <Link to="/" className='link'><span>My List</span></Link>
                    </div>
                    <div className="right">
                        <i className="fas fa-magnifying-glass"></i>
                        <span>KID</span>
                        <i className="fas fa-bell"></i>
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/17/61/male-avatar-profile-picture-vector-10211761.jpg" alt="profile" />
                        <div className="profile">
                            <i className="fas fa-caret-down"></i>
                            <div className="options">
                                <span>Settings</span>
                                <span>Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
