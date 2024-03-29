import './projects.css';
import firstProjectImg from '../assets/proImg.png';
import secondProjectImg from '../assets/proImg2.png';
import thirdProjectImg from '../assets/proImg3.png';

function Projects() {
    return (
        <div id="projects">
            <div className="firstProject">
                <p className="saas">SaaS</p>
                <p className="proTitle">ANA JAL Web App</p>
                <p className="proDescription">You can add what outcomes has this project brought after your design! For example, can show some real data.</p>
                <p className="tellMeMore">Tell me more</p>
                <img src={firstProjectImg} alt="firstProjectImage" />
                <div className="vector3"></div>
                <div className="blurBottom"></div>
            </div>
            <div className="secondProject">
                <div className="secondProjectLeft">
                    <p className="proTitle">JCC Wallet</p>
                    <p className="mobileApp">Mobile App</p>
                    <p className="proDes">You can add what outcomes has this project brought after your design! For example, can show some real data.</p>
                    <p className="tellMeMore">Tell me more</p>
                </div>
                <div className="secondProjectRight">
                    <img src={secondProjectImg} alt="secondProjectImage" />
                    <div className="vector4"></div>
                    <div className="vector5"></div>
                </div>
                <div className="blurBottom2"></div>
            </div>

            <div className="thirdProject">
                <div className="secondProjectRight">
                    <img src={thirdProjectImg} alt="secondProjectImage" />
                    <div className="vector6"></div>
                    <div className="vector7"></div>
                </div>
                <div className="secondProjectLeft">
                    <p className="proTitle">ANA JAL Mobile App</p>
                    <p className="mobileApp">Mobile App</p>
                    <p className="proDes">You can add what outcomes has this project brought after your design! For example, can show some real data.</p>
                    <p className="tellMeMore">Tell me more</p>
                </div>

                <div className="blurBottom3"></div>
            </div>
        </div>
    );
}

export default Projects;