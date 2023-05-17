import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import NewFigure from "./components/NewFigure";
import { useState } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

function App() {//main, parent component
  const [artists, setArtists] = useState();
  const [tudors, setTudors] = useState();
  const [femaleLeaders, setFemaleLeaders] = useState();
  
  return (
    <>
    <div className="Body">
      <Header />
      <Categories // this is passing props into categories//
        artists={artists}
        setArtists={setArtists}
        tudors={tudors}
        setTudors={setTudors}
        femaleLeaders={femaleLeaders}
        setFemaleLeaders={setFemaleLeaders}
      />
    
    <br />

      <NewFigure
      setArtists={setArtists}
      setTudors={setTudors}
      setFemaleLeaders={setFemaleLeaders}/>


      <Footer />
    </div>
    </>
  );
}

export default App;
