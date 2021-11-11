import './header.css';
import headerLogo from '../src/assets/Avatar_v3 1.png';



function Header() {
    return (
        <header className="stickeyHeader">
            <div className="mainHeader">
                <div>
                    <img src={headerLogo} alt="logo" className="headerImage"/>
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
            </div>
        </header>
    );
}

export default Header;
