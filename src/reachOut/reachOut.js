import './reachOut.css';
import email from '../assets/email.png';

function ReachOut() {
    return (
        <div className="reachOutMainContainer" id="reachMe">
            <div className="reachOutContainer">
                <div className="reachOutContainerLeft">
                    <p className="reachOutContainerHeading">Reach out for more?</p>
                    <p className="reachOutContainerDes">I regularly post my thoughts on twitter, and also write some articles on Medium. Otherwise, my linkedin is always welcoming.</p>
                    <div className="emailRow">
                        <input type="email" id="email" name="myEmail" className="emailBox"
                            placeholder="😃 your email will be receiving goodies "></input>
                        <p className="letMeIn">Let me in!</p>
                    </div>
                </div>
                <div className="reachOutContainerRightMain">
                    <div className="reachOutContainerRight">
                        <img src={email} alt="email" />
                    </div>
                    <div className="vector11"></div>
                    <div className="vector12"></div>
                </div>
            </div>
        </div>
    );
}

export default ReachOut;