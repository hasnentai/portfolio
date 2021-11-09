import './App.css';
import Banner from './banner/banner';
import Header from './header';
import LocalMeet from './localMeetUps/locaMeet';
import Projects from './projects/projects';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Projects />
      <LocalMeet />
    </>

  );
}

export default App;
