import './workshops.css';
import workshopsImg1 from '../assets/workshopImg1.png';
import workshopsImg2 from '../assets/workshopImg2.png';


function Workshops() {
    return (
        <div className="workshopsWrapper">
            <p className="workshopsHeading">Workshops</p>
            <div className="workshopsSection">
                <div className="workshopsSectionLeft">
                    <div>
                        <img src={workshopsImg1} alt="workshopImg" />
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
                <div className="workshopsSectionLeft">
                    <div>
                        <img src={workshopsImg2} alt="workshopImg" />
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
                <div className="vector10"></div>
            </div>
            
        </div>
    );
}

export default Workshops;