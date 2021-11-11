import './header.css';
import headerLogo from '../src/assets/Avatar_v3 1.png';
import { Menu, Twitter, XCircle } from 'react-feather';
import { useRef, useState } from 'react';



function Header() {
    const mobileMenu = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
    const toggelMenu = () => {
        
        if (!isOpen) {
           mobileMenu.current.style.transform = 'scaleY(1)';
            
            setIsOpen(true)
        } else {
            mobileMenu.current.style.transform = 'scaleY(0)';
            setIsOpen(false)
        }

    }
    return (
        <header className="stickeyHeader">
            <div className="mainHeader">
                <div>
                    <img src={headerLogo} alt="logo" className="headerImage" />
                </div>
                <div className="listStyleDiv">
                    <ul className="listStyle">
                        <li>Projects</li>
                        <li>Workshops</li>
                        <li>Local meets</li>
                        <li>Reach Me</li>
                    </ul>
                </div>
                <div>
                    <p className="twiter">@voidnen</p>
                </div>
                <div className="hamburger">
                    {!isOpen ? 
                        <Menu onClick={toggelMenu} />:
                        <XCircle onClick={toggelMenu}/>}
                </div>
            </div>

            <div ref={mobileMenu} className="mobileMenu">
                <ul className="mobileList">
                    <li>Projects</li>
                    <li>Workshops</li>
                    <li>Local meets</li>
                    <li>Reach Me</li>
                </ul>
                <div>
                    <Twitter/>
                    <p>@voidnen</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
