import { useEffect,useState } from 'react';
import './App.css';
import Banner from './banner/banner';
import Footer from './footer/footer';
import Header from './header';
import LocalMeet from './localMeetUps/locaMeet';
import Projects from './projects/projects';
import ReachOut from './reachOut/reachOut';
import Workshops from './workshops/workshops';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/assetlinks.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);


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
