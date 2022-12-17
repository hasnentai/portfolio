import './App.css';
import Banner from './banner/banner';
import Footer from './footer/footer';
import Header from './header';
import LocalMeet from './localMeetUps/locaMeet';
import Projects from './projects/projects';
import ReachOut from './reachOut/reachOut';
import Workshops from './workshops/workshops';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <LocalMeet />
      <Workshops />
      <ReachOut />
      <Footer />
    </>

  );
}

export default App;
