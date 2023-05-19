import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import NewFigure from "./components/NewFigure";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

//lifted up the state variables in order to share with the children//

function App() {//main, parent component
  const [artists, setArtists] = useState();//creating state variables to hold each category//
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

      <NewFigure // sharing the state with Categories, setting the lists//
      setArtists={setArtists}
      setTudors={setTudors}
      setFemaleLeaders={setFemaleLeaders}/>

    </div>
      <Footer />
    </>
  );
}

export default App;
