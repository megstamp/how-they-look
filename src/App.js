import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import NewFigure from "./components/NewFigure";


import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

function App() {//main, parent component
  return (
    <>
    <div className="Body">
      <Header />
      <Categories />
    
    <br />

      <NewFigure/>
      <Footer />
    </div>
    </>
  );
}

export default App;
