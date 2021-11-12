import { Instagram, Linkedin, Twitter, Youtube } from 'react-feather';
import './footer.css';

function Footer () {
    return (
        <div>
        <div className="mainFooter">
            <div className="footer1">
                <p>© 2021 your name</p>
            </div>
            <div className="footer2">
                <ul>
                    <li>Works</li>
                    <li>About</li>
                    <li>Articles</li>
                    <li>Experiments</li>
                </ul>
            </div>
            <div className="footer3">
                <p>Back up</p>
            </div>
        </div>
        <div className="socialIcons">
            <Instagram/>
            <Linkedin/>
            <Youtube/>
            <Twitter/>
        </div>
        </div>
    );
}

export default Footer;