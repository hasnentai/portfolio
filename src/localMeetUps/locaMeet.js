import './localMeet.css';
import localMeetImg1 from '../assets/localmeetImg1.png';
import localMeetImg2 from '../assets/localmeetImg2.png';


function LocalMeet() {
    return (
        <div className="localMeetWrapper">
            <p className="localMeetHeading">Local Meet up’s</p>
            <div className="localMeetUpSection">
                <div className="localMeetUpSectionLeft">
                    <div>
                        <img src={localMeetImg1} alt="localMeetImg" />
                    </div>
                    <div className="tdp">
                        <p className="tdpTitle">Project Title</p>
                        <p className="tdpDes">Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.</p>
                        <div className="tdpPlatform">
                            <p>Mobile App</p>
                            <p>Website</p>
                            <p>SaaS</p>
                        </div>
                    </div>
                    
                </div>
                <div className="localMeetUpSectionLeft">
                    <div>
                        <img src={localMeetImg2} alt="localMeetImg" />
                    </div>
                    <div className="tdp">
                        <p className="tdpTitle">Project Title</p>
                        <p className="tdpDes">Fill your project brief here. It can be the outcome of the project, or some success metrics, or a cheesy tagline.</p>
                        <div className="tdpPlatform">
                            <p>Mobile App</p>
                            <p>Website</p>
                            <p>SaaS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vector8"></div>
            <div className="vector9"></div>
        </div>
    );
}

export default LocalMeet;