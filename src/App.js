import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer"

import "bootstrap/dist/css/bootstrap.min.css";
import './styles/App.css';

function App() {
  return (
    <>
    <div className="Body">
      <Header />
      <Categories />
    </div>
      <Footer />
    </>
  );
}

export default App;
