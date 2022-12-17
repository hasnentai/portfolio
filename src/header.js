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

    const activeDesktopMenu = useRef(null);
    const activeMenu = (index) => {

        let len = activeDesktopMenu.current.childNodes.length;
        let liNodes = activeDesktopMenu.current.childNodes;

        for (let i = 0; i < len; i++) {
            liNodes[i].classList.remove("active");
        }

        liNodes[index].classList.add("active")
    }

    return (
        <header className="stickeyHeader">
            <div className="mainHeader">
                <div>
                    <a href="/">
                        <img src={headerLogo} alt="logo" className="headerImage" />
                    </a>
                </div>
                <div className="listStyleDiv">
                    <ul ref={activeDesktopMenu} className="listStyle">

                        <li className="active" onClick={() => { activeMenu(0) }}>
                            <a href="#projects" className="navLink">Projects</a>
                        </li>

                        <li onClick={() => { activeMenu(1) }}>
                            <a href="#workshops" className="navLink">Workshops</a>
                        </li>

                        <li onClick={() => { activeMenu(2) }}>
                            <a href="#localMeets" className="navLink">Local meets</a>
                        </li>

                        <li onClick={() => { activeMenu(3) }}>
                            <a href="#reachMe" className="navLink">Reach Me</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="twiter">@voidnen</p>
                </div>
                <div className="hamburger">
                    {!isOpen ?
                        <Menu onClick={toggelMenu} /> :
                        <XCircle onClick={toggelMenu} />}
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
                    <Twitter />
                    <p>@voidnen</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
