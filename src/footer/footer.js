import { Instagram, Linkedin, Twitter, Youtube } from 'react-feather';
import './footer.css';

function Footer() {
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
                <a href="www.google.com">
                    <Instagram />
                    {/* <FontAwesomeIcon icon={faRandom} size="2x"/>           */}
                </a>
                <a href="www.google.com">
                    <Linkedin />
                </a>

                <a href="www.google.com">
                    <Youtube />
                </a>

                <a href="www.google.com">
                    <Twitter />
                </a>

            </div>
        </div>
    );
}

export default Footer;