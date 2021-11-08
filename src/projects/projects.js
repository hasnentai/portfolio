import './projects.css';
import firstProjectImg from '../assets/proImg1.png';

function Projects() {
    return(
        <div className="firstProject">
                <p className="saas">SaaS</p>
                <p className="proTitle">Project title</p>
                <p className="proDescription">You can add what outcomes has this project brought after your design! For example, can show some real data.</p>
                <p className="tellMeMore">Tell me more</p>
                <img src={firstProjectImg} alt="firstProjectImage"/>                
        </div>
    );
}

export default Projects;