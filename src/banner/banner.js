import './banner.css';
// import { ReactComponent as vectorImage } from '../assets/vector/Vector.svg';

function Banner() {

    return (
        <div className="mainBanner">
            <div className="bannerContent">
                <div>
                    <p className="bannerHeading">Hello, I’m a Hasnen Tai</p>
                    <p className="bannerPara">I built this template for everyone who is looking to create a new personal portfolio website. You can write your own blurb here. 😃 </p>
                    <div className="sayDis">
                        <div className="sayHiBtn">
                            <p className="sayHi">Say Hi 👋</p>
                        </div>
                        <p className="disBtn">Discover my works</p>
                    </div>
                </div>
                <div>
                    <div className="vector1"></div>
                    <div className="vector2"></div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
